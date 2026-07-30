import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container-page max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p>Last updated: 29 July 2026</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              BioFuel Integrity Twin Ltd ("we", "our", or "us") is committed to protecting your privacy and ensuring your personal data is handled securely and in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is <strong>BioFuel Integrity Twin Ltd</strong>. 
              We are registered in England & Wales with company number <strong>17366215</strong>. Our registered office address is: 
              <em>The Old Chapel, 16 Oakfield Road, Clifton, Bristol BS8 2AP</em>.
            </p>
            <p className="mt-2">
              If you have any questions about this privacy policy or your data, please contact us at:{" "}
              <a href="mailto:BioFuelIntegrityTwin@outlook.com" className="text-primary hover:underline">
                BioFuelIntegrityTwin@outlook.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Data We Collect</h2>
            <p className="mb-2">We may collect and process the following data when you interact with our website or services:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, email address, job title, and company name when you submit enquiries for our pilot programme or investor relations.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and interaction metrics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. How We Use Your Data</h2>
            <p className="mb-2">Your data is processed under the lawful basis of our legitimate interests or your explicit consent to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your pilot access or investor enquiries.</li>
              <li>Provide you with relevant information regarding our platform and services.</li>
              <li>Analyse and improve the performance and security of our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Cookie Policy</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. 
              We use strictly necessary cookies to ensure the site functions correctly, and performance cookies to understand user interaction. 
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Retention, Sharing and Security</h2>
            <p className="mb-2">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.
            </p>
            <p>
              We do not sell your personal data. Your data is stored securely and access is restricted to authorised personnel only. 
              We may share data with trusted third-party service providers (such as hosting platforms) who operate under strict data processing agreements in compliance with UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">7. Your Rights Under UK GDPR</h2>
            <p className="mb-2">Under the UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Right of access:</strong> You can request a copy of the data we hold about you.</li>
              <li><strong>Right to rectification:</strong> You can ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Right to erasure (Right to be forgotten):</strong> You can request the deletion of your personal data.</li>
              <li><strong>Right to restrict processing:</strong> You can ask us to limit how your data is used.</li>
              <li><strong>Right to data portability:</strong> You can request the transfer of your data to another organisation.</li>
              <li><strong>Right to object:</strong> You can object to the processing of your data for certain purposes.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at <a href="mailto:BioFuelIntegrityTwin@outlook.com" className="text-primary hover:underline">BioFuelIntegrityTwin@outlook.com</a>. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data protection rights have been breached.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. Any updates will be published on this page with an amended "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
