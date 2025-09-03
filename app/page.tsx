"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Target,
  Lightbulb,
  TrendingUp,
  Calendar,
  ChevronRight,
  FileText,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const pillars = [
    {
      icon: Users,
      title: "People",
      description: "All stakeholders from executives to junior employees contributing to the learning ecosystem",
      color: "bg-[#B4975A]",
    },
    {
      icon: BookOpen,
      title: "Content",
      description: "All learning modalities including ILT, digital learning, and just-in-time resources",
      color: "bg-[#8A1538]",
      link: "/programs",
    },
    {
      icon: Settings,
      title: "Technology",
      description: "LMS, LXP, and digital platforms enabling seamless learning experiences",
      color: "bg-[#F89715]",
      link: "/technology",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Data-driven insights for informed decision making and performance tracking",
      color: "bg-[#D9B300]",
      link: "/analytics",
    },
    {
      icon: Target,
      title: "Governance",
      description: "Standards, procedures, and compliance frameworks ensuring quality",
      color: "bg-[#D64550]",
      link: "/governance",
    },
    {
      icon: Lightbulb,
      title: "Culture",
      description: "Learning environment fostering engagement and continuous development",
      color: "bg-[#31251C]",
      link: "/culture",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description:
        "Measuring and demonstrating the effectiveness of learning programs through comprehensive evaluation and business outcomes",
      color: "bg-[#2E7D32]",
      link: "/impact",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1D5BD]/30 to-[#D6D3D2]/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/MAF.png"
                  alt="Majid Al Futtaim Logo"
                  width={40}
                  height={40}
                  className="object-contain" // Ensure the image scales within the container
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#31251C]">MAF Learning & Development</h1>
                <p className="text-sm text-gray-600">Global Solutions Playbook</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/strategy" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Strategy
              </Link>
              <Link href="/programs" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Programs
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Analytics
              </Link>
              <Link href="/governance" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Governance
              </Link>
              <Link href="/impact" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Impact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#B4975A] text-white">Learning & Development Ecosystem</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#31251C] mb-6">
            Building a Culture of
            <span className="text-[#B4975A]"> Continuous Learning</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive guide to our L&D ecosystem, serving as a key resource for our Learning community, People and
            Organization community, Leaders, and our valuable learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
              <Link href="/strategy">Explore Strategy</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#8A1538] to-[#D64550] hover:from-[#B4975A] hover:to-[#F89715] text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4"
            >
              <Link
                href="https://majidalfuttaim-my.sharepoint.com/:p:/r/personal/lina_arafa_maf_ae/_layouts/15/Doc.aspx?sourcedoc=%7B6E054032-3A0F-4CD2-8187-5E25B4B93C56%7D&file=L%26D%20Playbook-%20270225.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <FileText className="w-6 h-6" />
                <span className="text-lg font-semibold">Access full PowerPoint version</span>
              </Link>
            </Button>
          </div>

          {/* Prominent Calendar Button */}
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#D9B300] to-[#F89715] hover:from-[#B4975A] hover:to-[#8A1538] text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4"
            >
              <Link
                href="https://gs-ld-calendar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold">View Training Calendar</span>
              </Link>
            </Button>
            <p className="text-sm text-gray-600 mt-2">Access all upcoming training events and schedules</p>
          </div>

          {/* Admin Portal Button */}
          <div className="mt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#31251C] to-[#8A1538] hover:from-[#B4975A] hover:to-[#D64550] text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4"
              onClick={() => {
                const password = prompt("Enter password to access Admin Portal:")
                if (password === "gsld@123") {
                  window.open("https://mafgs-calendar.vercel.app/", "_blank")
                } else if (password !== null) {
                  alert("Incorrect password. Access denied.")
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-6 h-6" />
                <span className="text-lg font-semibold">Admin Portal</span>
              </div>
            </Button>
            <p className="text-sm text-gray-600 mt-2">Access administrative functions and settings</p>
          </div>

          {/* Vendor Catalogue Button */}
          <div className="mt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#2E7D32] to-[#B4975A] hover:from-[#F89715] hover:to-[#D64550] text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4"
            >
              <Link
                href="https://mafgs-vendorcatalogue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <BookOpen className="w-6 h-6" />
                <span className="text-lg font-semibold">Vendor Catalogue</span>
              </Link>
            </Button>
            <p className="text-sm text-gray-600 mt-2">Browse our comprehensive vendor catalogue</p>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#31251C] mb-4">Seven Core Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation of our L&D strategy, representing seven key components that drive our learning initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-[#D6D3D2]/50 cursor-pointer group hover:scale-105 hover:border-[#B4975A] transform"
                onClick={() => pillar.link && window.open(pillar.link, "_self")}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#31251C] group-hover:text-[#B4975A] transition-colors duration-300">
                      {pillar.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {pillar.description}
                  </p>
                  {pillar.link && (
                    <Button
                      asChild
                      size="sm"
                      className="mt-4 w-full bg-[#B4975A] hover:bg-[#8A1538] text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Link href={pillar.link} className="flex items-center justify-center gap-2">
                        Learn More{" "}
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-r from-[#E1D5BD]/20 to-[#D6D3D2]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#31251C] mb-6">Strategic Learning Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#B4975A] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#31251C]">Skills-Gap Analysis</h3>
                    <p className="text-gray-600">
                      Identifying current and future skills needed for organizational success
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#B4975A] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#31251C]">Future-Ready Talents</h3>
                    <p className="text-gray-600">Developing capabilities for tomorrow's challenges and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#B4975A] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#31251C]">ADDIE Framework</h3>
                    <p className="text-gray-600">
                      Systematic instructional design ensuring effective learning outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#D6D3D2]/50 hover:shadow-xl transition-all duration-300 hover:border-[#B4975A] cursor-pointer">
              <h3 className="text-xl font-bold text-[#31251C] mb-4">Learning Impact Model</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Learning Opportunity</span>
                  <Badge className="bg-[#E1D5BD] text-[#31251C]">Access to relevant choices</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Learning Capability</span>
                  <Badge className="bg-[#E1D5BD] text-[#31251C]">How to learn, not just what</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Learning Environment</span>
                  <Badge className="bg-[#E1D5BD] text-[#31251C]">Supportive culture</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Learning Impact</span>
                  <Badge className="bg-[#E1D5BD] text-[#31251C]">Performance improvement</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#31251C] mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#D6D3D2]/50">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-[#B4975A] mx-auto mb-2" />
                <CardTitle className="text-[#31251C]">Learning Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Explore our comprehensive L&D strategy and framework</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
                >
                  <Link href="/strategy">View Strategy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#D6D3D2]/50">
              <CardHeader className="text-center">
                <BookOpen className="w-12 h-12 text-[#8A1538] mx-auto mb-2" />
                <CardTitle className="text-[#31251C]">Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Discover available training programs and modules</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538] hover:text-white bg-transparent"
                >
                  <Link href="/programs">View Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#D6D3D2]/50">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-[#D64550] mx-auto mb-2" />
                <CardTitle className="text-[#31251C]">Learning Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Measure learning effectiveness using Kirkpatrick model</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#D64550] text-[#D64550] hover:bg-[#D64550] hover:text-white bg-transparent"
                >
                  <Link href="/impact">View Impact</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#D6D3D2]/50">
              <CardHeader className="text-center">
                <Settings className="w-12 h-12 text-[#F89715] mx-auto mb-2" />
                <CardTitle className="text-[#31251C]">Governance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Review governance frameworks and procedures</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#F89715] text-[#F89715] hover:bg-[#F89715] hover:text-white bg-transparent"
                >
                  <Link href="/governance">View Governance</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#31251C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MAF Learning & Development</h3>
              <p className="text-[#D6D3D2]">
                Building a culture of continuous learning and development across the organization.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-[#D6D3D2]">
                <li>
                  <Link href="/strategy" className="hover:text-[#B4975A] transition-colors">
                    Learning Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#B4975A] transition-colors">
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="hover:text-[#B4975A] transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="hover:text-[#B4975A] transition-colors">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-[#B4975A] transition-colors">
                    Learning Impact
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-[#B4975A] transition-colors">
                    Training Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="hover:text-[#B4975A] transition-colors">
                    Learning Culture
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="hover:text-[#B4975A] transition-colors">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-[#D6D3D2]">
                GS.LearningAndDevelopment@maf.ae
                <br />
                GS EG Office - City Center Almaza - Cairo
              </p>
            </div>
          </div>
          <div className="border-t border-[#B4975A]/30 mt-8 pt-8 text-center text-[#D6D3D2]">
            <p>&copy; 2024 MAF Global Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
