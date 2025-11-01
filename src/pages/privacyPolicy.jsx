import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-2xl p-8 md:p-12 ">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>Remito.Pe</strong>, we respect and value your privacy. This
          Privacy Policy outlines how we collect, use, disclose, and protect your
          information when you use our cross-border payment services. By
          accessing or using our website and services, you agree to the practices
          described in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information when you use our
          services:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Personal Identification Information:</strong> When you create
            an account, make transactions, or interact with our website, we may
            collect personal details such as your name, email address, phone
            number, address, date of birth, and government-issued identification
            numbers.
          </li>
          <li>
            <strong>Payment Information:</strong> To process cross-border
            transactions, we collect payment details such as bank account numbers,
            payment method information, and billing addresses.
          </li>
          <li>
            <strong>Transactional Data:</strong> We may collect information
            related to your transactions, such as the amount, currency, and
            recipient details, including IP addresses and device data used during
            the transaction.
          </li>
          <li>
            <strong>Usage Information:</strong> We may collect data about how you
            use our website, such as browsing activity, device information, IP
            addresses, and cookies.
          </li>
          <li>
            <strong>Third-Party Information:</strong> We may also collect
            information from third-party service providers, such as banks,
            financial institutions, and credit agencies, to facilitate the
            processing of your payments.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>To provide and improve our services:</strong> To process your
            cross-border payments, verify your identity, and offer customer
            support.
          </li>
          <li>
            <strong>Compliance with Legal and Regulatory Requirements:</strong> We
            may use your information to comply with anti-money laundering (AML)
            regulations, Know Your Customer (KYC) policies, and other legal
            obligations.
          </li>
          <li>
            <strong>Fraud Prevention:</strong> We use your information to detect
            and prevent fraudulent activities or suspicious transactions.
          </li>
          <li>
            <strong>Personalization:</strong> To personalize your experience on
            our platform and offer recommendations and services tailored to you.
          </li>
          <li>
            <strong>Marketing:</strong> If you have opted in, we may send you
            marketing communications, including promotional offers, newsletters,
            and updates regarding new services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Share Your Information</h2>
        <p className="mb-4">We may share your information with the following parties:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Third-Party Service Providers:</strong> To process payments,
            provide customer support, and operate our platform, we may share your
            information with trusted third-party service providers (e.g., payment
            processors, cloud service providers).
          </li>
          <li>
            <strong>Regulatory Authorities:</strong> We may disclose your
            information to comply with legal obligations, such as reporting to
            financial regulators or tax authorities.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of all or part of our business, your information
            may be transferred as part of that transaction.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We use industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, no method of transmission over the internet or
          electronic storage is completely secure, and we cannot guarantee the
          absolute security of your data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and other tracking technologies to enhance your user
          experience. Cookies are small data files stored on your device that help
          us remember your preferences, analyze site usage, and provide targeted
          advertising. You can manage your cookie preferences through your browser
          settings.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. International Data Transfers</h2>
        <p className="mb-4">
          As Remito.Pe provides cross-border payment services, your information
          may be transferred and processed in countries outside your country of
          residence. By using our services, you consent to the transfer of your
          data to these countries, which may have different data protection laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Your Rights</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Access:</strong> You can request access to the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You can request corrections to any
            inaccurate or incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> You may request the deletion of your
            personal data, subject to legal and contractual obligations.
          </li>
          <li>
            <strong>Opt-Out of Marketing:</strong> You can opt out of receiving
            marketing communications at any time by following the unsubscribe
            instructions in our emails or contacting us directly.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data for as long as necessary to provide our
          services, comply with legal obligations, resolve disputes, and enforce
          our agreements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page, and the "Effective Date" at the top will be
          updated. We encourage you to review this Privacy Policy periodically for
          any updates.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or how we
          handle your personal information, please contact us at:{" "}
          <a
            href="https://remito.pe/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EB5C26] hover:underline font-medium"
          >
            https://remito.pe/contact-us
          </a>
        </p>





        <p className="text-sm text-gray-500">
          <em>
            Disclaimer: This Privacy Policy is provided for informational purposes
            only. You should consult with a legal expert to ensure it is suitable
            for your business and complies with local laws and regulations,
            including data protection laws like GDPR (for the EU) or CCPA (for
            California, USA), as applicable.
          </em>
        </p>

        <p className="mt-8 text-sm text-gray-500">
          <em>Last updated: October 16, 2025</em>
        </p>
      </div>
    </div>

  );
};

export default PrivacyPolicy;
