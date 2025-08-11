import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Terms of Service | Best Dates & Fruits",
  description: "Terms of service for Best Dates & Fruits website and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-24 pb-16">
        <PageHeader
          title="Terms of Service"
          description="Please read these terms carefully before using our services."
        />

        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="py-12 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Best Dates & Fruits's website
                for personal, non-commercial transitory viewing only.
              </p>

              <h2>Disclaimer</h2>
              <p>
                The materials on Best Dates & Fruits's website are provided on an 'as is' basis. Best Dates & Fruits
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2>Limitations</h2>
              <p>
                In no event shall Best Dates & Fruits or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Best Dates & Fruits's website.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at
                direction@best-dattes-and-fruits.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
