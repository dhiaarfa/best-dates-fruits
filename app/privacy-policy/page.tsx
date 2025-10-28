import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Privacy Policy | Best Dates & Fruits",
  description: "Privacy policy for Best Dates & Fruits website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-24 pb-16">
        <PageHeader
          title="Privacy Policy"
          description="Learn how we collect, use, and protect your personal information."
        />

        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="py-12 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                subscribe to our newsletter, or contact us for support.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                and communicate with you about our products and services.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this privacy policy.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                direction@bestdatesandfruits.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
