import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Monitor,
  ExternalLink,
  Settings,
  Share2,
  Database,
  Globe,
  MessageSquare,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react"

export default function TechnologyPage() {
  const platforms = [
    {
      name: "Success Factors - Learning",
      description: "MAF's backbone LMS (Learning Management System) for comprehensive learning management",
      icon: Database,
      color: "bg-[#B4975A]",
      url: "https://mafventure.plateau.com/learning/user/personal/landOnPortalHome.do?fromSF=Y&fromDeepLink=true&pageID=",
      features: [
        "Course catalog and enrollment management",
        "Learning path creation and tracking",
        "Comprehensive reporting and analytics",
        "Mobile learning accessibility",
        "Integration with HR systems",
        "Compliance training management",
      ],
      category: "Core LMS",
      audience: "All MAF Employees",
    },
    {
      name: "S@M - Solutions at MAF",
      description: "One-stop shop for accessing all GS' L&D services and support catalog",
      icon: Settings,
      color: "bg-[#8A1538]",
      url: "https://solutionsat.maf.ae/support/catalog/items?category_id=54000049965",
      features: [
        "Service catalog for L&D requests",
        "Training program registration",
        "Resource booking and scheduling",
        "Support ticket management",
        "Service level tracking",
        "Automated workflow processes",
      ],
      category: "Service Platform",
      audience: "GS Employees & Stakeholders",
    },
    {
      name: "SharePoint - LLCoE",
      description: "LLCoE's SharePoint featuring information about Academies, Activations, and leadership resources",
      icon: Share2,
      color: "bg-[#F89715]",
      url: "https://majidalfuttaim.sharepoint.com/sites/LearningLeadershipCOE/SitePages/LearningTeamHome.aspx",
      features: [
        "Academy program information",
        "Leadership development resources",
        "Document libraries and templates",
        "Collaboration workspaces",
        "Event calendars and announcements",
        "Knowledge sharing repositories",
      ],
      category: "Collaboration Hub",
      audience: "Leadership & L&D Teams",
    },
    {
      name: "Workplace Community",
      description: "Communication platform for the MAF learning ecosystem to connect and share learning insights",
      icon: MessageSquare,
      color: "bg-[#2E7D32]",
      url: "https://majidalfuttaim.workplace.com/groups/learningandleadershipcoe",
      features: [
        "Learning community discussions",
        "Knowledge sharing and best practices",
        "Event updates and announcements",
        "Peer-to-peer learning support",
        "Thought leadership content",
        "Cross-functional collaboration",
      ],
      category: "Social Learning",
      audience: "Learning Community Members",
    },
  ]

  const technologyBenefits = [
    {
      title: "Seamless Integration",
      description: "All platforms work together to provide a unified learning experience",
      icon: Zap,
    },
    {
      title: "Accessibility",
      description: "Multi-device support ensuring learning is available anytime, anywhere",
      icon: Globe,
    },
    {
      title: "Scalability",
      description: "Robust infrastructure supporting thousands of learners across MAF",
      icon: Monitor,
    },
    {
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for optimal user experience",
      icon: Star,
    },
  ]

  const integrationFeatures = [
    {
      feature: "Single Sign-On (SSO)",
      description: "Seamless access across all platforms with unified authentication",
      platforms: ["Success Factors", "SharePoint", "Workplace"],
    },
    {
      feature: "Data Synchronization",
      description: "Real-time data sharing between systems for consistent user experience",
      platforms: ["Success Factors", "S@M"],
    },
    {
      feature: "Mobile Optimization",
      description: "Responsive design ensuring optimal experience on all devices",
      platforms: ["All Platforms"],
    },
    {
      feature: "Analytics Integration",
      description: "Unified reporting and analytics across all learning touchpoints",
      platforms: ["Success Factors", "Power BI"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1D5BD]/20 to-[#D6D3D2]/20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" size="sm">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
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
              <Link href="/culture" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Culture
              </Link>
              <Link href="/calendar" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Calendar
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-[#F89715] text-white">Learning Technology Stack</Badge>
          <h1 className="text-4xl font-bold text-[#31251C] mb-4">Technology Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover our comprehensive technology platform that powers learning experiences across MAF, from our core
            LMS to collaborative communities and service platforms.
          </p>
        </div>

        <Tabs defaultValue="platforms" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-[#E1D5BD]/50">
            <TabsTrigger value="platforms" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Core Platforms
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Key Features
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white"
            >
              Integration
            </TabsTrigger>
            <TabsTrigger value="access" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Quick Access
            </TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-[#B4975A]/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                        <platform.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{platform.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className="bg-[#E1D5BD] text-[#31251C] text-xs">{platform.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-3">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#31251C] mb-2">Key Capabilities:</h4>
                        <ul className="space-y-1">
                          {platform.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">Target Audience:</span>
                          <Badge variant="outline" className="text-xs">
                            {platform.audience}
                          </Badge>
                        </div>
                        <Button asChild className={`w-full ${platform.color} hover:opacity-90 text-white`}>
                          <a href={platform.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Access {platform.name}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#31251C]">Technology Benefits</CardTitle>
                <CardDescription>How our integrated technology stack enhances the learning experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technologyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-[#E1D5BD]/20 rounded-lg">
                      <div className="w-10 h-10 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-[#B4975A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#31251C] mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-xl text-[#31251C]">Platform Capabilities</CardTitle>
                  <CardDescription>Core functionalities across our technology stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B4975A] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Learning Management</h4>
                        <p className="text-sm text-gray-600">
                          Comprehensive course delivery, tracking, and assessment capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8A1538] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Service Management</h4>
                        <p className="text-sm text-gray-600">
                          Streamlined request handling and service delivery processes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F89715] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Content Management</h4>
                        <p className="text-sm text-gray-600">
                          Centralized repository for learning resources and documentation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Social Learning</h4>
                        <p className="text-sm text-gray-600">
                          Community-driven learning and knowledge sharing platforms
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-xl text-[#31251C]">User Experience Focus</CardTitle>
                  <CardDescription>Designed with learners and administrators in mind</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Intuitive Navigation</span>
                      <Badge className="bg-[#B4975A] text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Mobile Responsive</span>
                      <Badge className="bg-[#8A1538] text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Single Sign-On</span>
                      <Badge className="bg-[#F89715] text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Real-time Updates</span>
                      <Badge className="bg-[#2E7D32] text-white">✓</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#31251C]">Platform Integration</CardTitle>
                <CardDescription>
                  How our technology platforms work together to create a seamless learning ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {integrationFeatures.map((integration, index) => (
                    <div key={index} className="border rounded-lg p-6 bg-[#E1D5BD]/10">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                          <Settings className="w-6 h-6 text-[#B4975A]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#31251C] mb-2">{integration.feature}</h3>
                          <p className="text-gray-600 mb-3">{integration.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {integration.platforms.map((platform, platformIndex) => (
                              <Badge key={platformIndex} className="bg-[#D6D3D2] text-[#31251C] text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#31251C]">Data Flow & Analytics</CardTitle>
                <CardDescription>How data moves through our integrated ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#B4975A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-[#B4975A]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Data Collection</h3>
                    <p className="text-sm text-gray-600">
                      Learning activities, user interactions, and performance metrics captured across all platforms
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F89715]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-[#F89715]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Data Processing</h3>
                    <p className="text-sm text-gray-600">
                      Automated workflows and integration processes ensure data consistency and accuracy
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#2E7D32]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-[#2E7D32]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Insights & Reporting</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive analytics and dashboards provide actionable insights for decision making
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-[#B4975A]/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#31251C]">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <Badge className="bg-[#E1D5BD] text-[#31251C] mb-2">{platform.category}</Badge>
                      <p className="text-sm text-gray-600">{platform.audience}</p>
                    </div>
                    <Button asChild className={`w-full ${platform.color} hover:opacity-90 text-white`}>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Access Platform
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-[#B4975A]/10 to-[#E1D5BD]/30 border-[#B4975A]/30">
              <CardContent className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#31251C] mb-4">Need Help Getting Started?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our technology platforms are designed to be intuitive, but we're here to help if you need assistance
                  navigating any of our systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#B4975A] hover:bg-[#8A1538] text-white px-8 py-4">
                    <a
                      href="https://solutionsat.maf.ae/support/catalog/items?category_id=54000049965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>Get Support</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent px-8 py-4"
                  >
                    <Link href="/governance">View User Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            asChild
            variant="outline"
            className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
            <Link href="/analytics">
              View Analytics Dashboard
              <Monitor className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
