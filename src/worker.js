export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact") {
      return new Response("Not Found", {
        status: 404,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: {
          Allow: "POST",
        },
      });
    }

    try {
      const data = await request.json();

      const {
        name,
        company,
        email,
        phone,
        service,
        timeline,
        message,
        consent,
      } = data;

      if (!name || !email || !service || !message || !consent) {
        return Response.json(
          {
            success: false,
            message: "Please complete all required fields.",
          },
          { status: 400 }
        );
      }

      const emailResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Ayaansh T Corp <onboarding@resend.dev>",
            to: ["ayaanshtcorp@gmail.com"],
            subject: `New Website Enquiry - ${name}`,
            html: `
              <h2>New Ayaansh T Corp Website Enquiry</h2>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>

              <h3>Project / Requirement</h3>
              <p>${message}</p>

              <hr />

              <p>
                This enquiry was submitted through the
                Ayaansh T Corp website contact form.
              </p>
            `,
          }),
        }
      );

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();

        console.error("Resend error:", errorText);

        return Response.json(
          {
            success: false,
            message: "Unable to send the enquiry notification.",
          },
          { status: 502 }
        );
      }

      return Response.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    } catch (error) {
      console.error("Contact Worker error:", error);

      return Response.json(
        {
          success: false,
          message: "Unable to process your enquiry.",
        },
        { status: 500 }
      );
    }
  },
};