import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      businessType,
      budget,
      timeline,
      subject,
      requirements,
      message,
    } = body;

    await transporter.sendMail({
      from: "NovaCode Labs <novacodelabs1@gmail.com>",
      to: "novacodelabs1@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${subject || "Project Consultation"} — from ${fullName}`,
      text: `Name: ${fullName}\nCompany: ${companyName || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nFocus: ${businessType || "N/A"}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}\nRequirements: ${requirements || "N/A"}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background:#030712; color:#fff; padding:40px; max-width:640px; margin:0 auto; border-radius:16px;">
          <div style="border-bottom:2px solid #2563EB; padding-bottom:24px; margin-bottom:28px;">
            <h1 style="margin:0; font-size:24px; font-weight:800; background:linear-gradient(135deg,#2563EB,#06B6D4); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
              NovaCode — New Project Intake
            </h1>
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF; width:160px;">Full Name</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${fullName}</td>
            </tr>
            ${companyName ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Company</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${companyName}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Email</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#06B6D4;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Phone</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${phone}</td>
            </tr>` : ""}
            ${businessType ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Focus Area</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${businessType}</td>
            </tr>` : ""}
            ${budget ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Budget</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${budget}</td>
            </tr>` : ""}
            ${timeline ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF;">Timeline</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; font-weight:700; color:#fff;">${timeline}</td>
            </tr>` : ""}
            ${requirements ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:13px; color:#9CA3AF; vertical-align:top; padding-top:14px;">Requirements</td>
              <td style="padding:10px 0; border-bottom:1px solid #1f2937; font-size:14px; color:#D1D5DB; line-height:1.6;">${requirements}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0; font-size:13px; color:#9CA3AF; vertical-align:top; padding-top:14px;">Message</td>
              <td style="padding:10px 0; font-size:14px; color:#D1D5DB; line-height:1.6;">${message}</td>
            </tr>
          </table>

          <div style="margin-top:32px; padding:16px 20px; background:#111827; border-radius:12px; border-left:3px solid #2563EB;">
            <p style="margin:0; font-size:12px; color:#6B7280;">Reply directly to this email to respond to <strong style="color:#fff;">${fullName}</strong> at <strong style="color:#06B6D4;">${email}</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
