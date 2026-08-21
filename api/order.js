/* ==========================================================================
   /api/order — Vercel serverless function

   Receives order details from checkout.js after an order is placed, and
   sends two emails via Resend:
     1. A notification to you (the business) with full order details
     2. A confirmation to the customer, if they provided an email

   Requires one environment variable, set in Vercel project settings
   (Settings → Environment Variables), NOT hardcoded here:
     RESEND_API_KEY = your Resend API key

   The "from" address (orders@australiavapedistrict.com) must belong to a
   domain that's been verified in your Resend account — same process you
   already went through for teasaccess.com.
   ========================================================================== */

const FROM_EMAIL = "orders@australiavapedistrict.com";
const BUSINESS_EMAIL = "aussiedistrict@gmail.com";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set in Vercel environment variables");
    return res.status(500).json({ error: "Server not configured" });
  }

  const order = req.body;
  if (!order || !order.orderNumber || order.total == null) {
    return res.status(400).json({ error: "Invalid order data" });
  }

  const itemsRows = (order.items || [])
    .map(
      (item) =>
        `<tr><td style="padding:6px 10px;border:1px solid #ddd;">${escapeHtml(item.name)}${
          item.option ? ` (${escapeHtml(item.option)})` : ""
        }</td><td style="padding:6px 10px;border:1px solid #ddd;text-align:center;">${escapeHtml(
          String(item.qty)
        )}</td><td style="padding:6px 10px;border:1px solid #ddd;text-align:right;">$${Number(
          item.lineTotal
        ).toFixed(2)}</td></tr>`
    )
    .join("");

  const itemsTable = `
    <table style="border-collapse:collapse;width:100%;margin:12px 0;font-family:Arial,sans-serif;font-size:14px;">
      <tr style="background:#f4f4f4;">
        <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Item</th>
        <th style="padding:6px 10px;border:1px solid #ddd;text-align:center;">Qty</th>
        <th style="padding:6px 10px;border:1px solid #ddd;text-align:right;">Total</th>
      </tr>
      ${itemsRows}
    </table>
  `;

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:600px;">
      <h2 style="font-weight:400;">New Order — ${escapeHtml(order.orderNumber)}</h2>
      <p><strong>Total:</strong> $${Number(order.total).toFixed(2)} AUD</p>
      <p><strong>Payment Method:</strong> ${escapeHtml(order.paymentMethod || "")}</p>
      <p><strong>Shipping:</strong> ${escapeHtml(order.shippingLabel || "")} — $${Number(order.shipping || 0).toFixed(2)}</p>
      ${itemsTable}
      <p><strong>Billing Address:</strong><br>${escapeHtml(order.billingAddressText || "")}</p>
      <p><strong>Shipping Address:</strong><br>${escapeHtml(order.shippingAddressText || "")}</p>
      ${order.orderNotes ? `<p><strong>Order Notes:</strong> ${escapeHtml(order.orderNotes)}</p>` : ""}
      <p style="color:#777;font-size:12px;margin-top:20px;">This order is not yet stored in a database — this email is currently the only record of it.</p>
    </div>
  `;

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:600px;">
      <h2 style="font-weight:400;">Thanks for your order, ${escapeHtml(order.customerFirstName || "")}!</h2>
      <p>Your order <strong>${escapeHtml(order.orderNumber)}</strong> has been received.</p>
      ${itemsTable}
      <p><strong>Total:</strong> $${Number(order.total).toFixed(2)} AUD</p>
      <p><strong>Shipping:</strong> ${escapeHtml(order.shippingLabel || "")}</p>
      <p>If you have any questions about your order, reach out via live chat on the site or reply to this email.</p>
      <p style="margin-top:20px;">— australiavapedistrict</p>
    </div>
  `;

  try {
    await sendEmail(RESEND_API_KEY, {
      to: BUSINESS_EMAIL,
      from: FROM_EMAIL,
      subject: `New Order ${order.orderNumber} — $${Number(order.total).toFixed(2)} AUD`,
      html: adminHtml,
    });

    if (order.customerEmail) {
      await sendEmail(RESEND_API_KEY, {
        to: order.customerEmail,
        from: FROM_EMAIL,
        subject: `Your australiavapedistrict order ${order.orderNumber}`,
        html: customerHtml,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Order email error:", err);
    // Don't let an email failure block the customer's confirmation screen —
    // the frontend treats this as non-fatal either way, but we still report
    // the failure so it shows up in Vercel's function logs.
    return res.status(500).json({ error: "Failed to send order email" });
  }
}

async function sendEmail(apiKey, { to, from, subject, html }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Resend API error ${response.status}: ${text}`);
  }
  return response.json();
}

function escapeHtml(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}