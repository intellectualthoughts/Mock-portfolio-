import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const civicTools = [
    {
      icon: "🗳️",
      title: "Check Voter Registration",
      description: "Verify your registration status, find your polling place, and view your sample ballot.",
      link: "#",
      label: "OFFICIAL STATE TOOL"
    },
    {
      icon: "📝",
      title: "Register to Vote",
      description: "Georgia residents can register online, by mail, or in person. Registration closes 29 days before election.",
      link: "#",
      label: "SECRETARY OF STATE"
    },
    {
      icon: "📬",
      title: "Request an Absentee Ballot",
      description: "Georgia voters can request an absentee ballot online. Apply early — the deadline is 3 days before election.",
      link: "#",
      label: "ELECTIONS DIVISION"
    },
    {
      icon: "📍",
      title: "Find Early Voting Locations",
      description: "Georgia offers early voting in every county. Find the location nearest you.",
      link: "#",
      label: "ALL 159 COUNTIES"
    },
    {
      icon: "🚗",
      title: "Get a Ride to the Polls",
      description: "No transportation? Call 1-877-524-8683 or visit RideToThePoll.com — free rides available.",
      link: "#",
      label: "FREE SERVICE"
    },
    {
      icon: "⚖️",
      title: "Know Your Voter Rights",
      description: "Learn about acceptable ID, provisional ballots, election observer rights, and more.",
      link: "#",
      label: "KNOW BEFORE YOU GO"
    }
  ];

  const organizations = [
    {
      abbr: "GC",
      name: "Georgia Coalition for the People's Agenda",
      description: "Umbrella coalition of civil rights, labor, and justice organizations founded in 1991."
    },
    {
      abbr: "Pr",
      name: "ProGeorgia",
      description: "Statewide coalition of 60+ civic engagement organizations providing voting access and democracy representation."
    },
    {
      abbr: "NGP",
      name: "New Georgia Project",
      description: "Nonpartisan effort to register and civically engage the New Georgia Majority — Black, brown, and young voters."
    },
    {
      abbr: "GR",
      name: "Georgia Recorder",
      description: "Independent nonprofit news organization connecting public policies to communities across Georgia."
    },
    {
      abbr: "LWV",
      name: "League of Women Voters of Georgia",
      description: "Nonpartisan civic organization fighting voter suppression and promoting informed participation."
    },
    {
      abbr: "NA",
      name: "Georgia NAACP",
      description: "State chapter of America's oldest civil rights organization, fighting racial justice in law, policy, and practice."
    },
    {
      abbr: "PGA",
      name: "Progress Georgia",
      description: "Catalyst for civic engagement and empowerment, arming advocates with tools to reshape Georgia's legislative agenda."
    },
    {
      abbr: "GS",
      name: "Georgia Shift",
      description: "Strengthening civic engagement among college students, especially at HBCUs in rural Georgia."
    },
    {
      abbr: "FF",
      name: "Fair Fight Action",
      description: "Founded by Stacey Abrams, Fair Fight promotes fair elections and fights voter suppression in Georgia."
    }
  ];

  const newsCategories = [
    { name: "All Stories", color: "bg-slate-100" },
    { name: "Voting Rights", color: "bg-red-100" },
    { name: "Elections", color: "bg-blue-100" },
    { name: "Civic Education", color: "bg-green-100" },
    { name: "Policy & Accountability", color: "bg-purple-100" }
  ];

  const quickLinks = [
    { label: "Check Registration", href: "#" },
    { label: "Register to Vote", href: "#" },
    { label: "Absentee Ballot", href: "#" },
    { label: "Early Voting Locations", href: "#" },
    { label: "Rides to the Polls", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Donate", href: "#" },
    { label: "Submit a Story", href: "#" },
    { label: "Partner With Us", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🗳️</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">People Powered</div>
                <div className="text-xs text-red-600 font-semibold">GEORGIA</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#newsroom" className="text-gray-700 hover:text-red-600 font-medium">Newsroom</a>
              <a href="#issues" className="text-gray-700 hover:text-red-600 font-medium">Issues</a>
              <a href="#tools" className="text-gray-700 hover:text-red-600 font-medium">Civic Tools</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              <a href="#involved" className="text-gray-700 hover:text-red-600 font-medium">Get Involved</a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Take Action</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold mb-6">
                🔴 LIVE CIVIC NEWSROOM
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Georgia's Democracy <span className="text-red-400">Starts with You</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                People Powered Georgia is a nonpartisan civic newsroom dedicated to keeping Georgians informed, organized, and at the center of their democracy — from the ballot box to the State Capitol.
              </p>
              <div className="flex gap-4 mb-12">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg border-2 border-red-600">
                  📖 Read the Newsroom
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-6 text-lg">
                  Get Involved →
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold">500K+</div>
                  <div className="text-sm text-gray-300">VOTERS REACHED</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">2K+</div>
                  <div className="text-sm text-gray-300">VOLUNTEERS</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">159</div>
                  <div className="text-sm text-gray-300">COUNTIES</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-green-400 font-semibold">Live Updates</span>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Voting Rights • 2h ago</div>
                  <h3 className="font-semibold text-white mb-1">Henry McNeal Turner Voting Rights Act Advances</h3>
                  <p className="text-sm text-gray-300">Advocates push for stronger state-level protections after federal rollbacks raise alarm across Georgia communities.</p>
                </div>
                <div className="pb-4 border-b border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Election Access • 5h ago</div>
                  <h3 className="font-semibold text-white mb-1">Early Voting Expansion Gains Bipartisan Support</h3>
                  <p className="text-sm text-gray-300">New proposals would add weekend hours and additional drop boxes across rural Georgia counties.</p>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-2">Civic Education • 1d ago</div>
                  <h3 className="font-semibold text-white mb-1">Know Your Polling Rights Workshop — Statewide Tour</h3>
                  <p className="text-sm text-gray-300">Free trainings available in Atlanta, Savannah, Macon and Augusta — helping voters navigate new ID requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Civic Tools Section */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Civic Tools & Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civicTools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.link}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:border-red-300 transition-all group"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <div className="text-xs font-semibold text-red-600 mb-2">{tool.label}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Partner Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-red-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {org.abbr}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{org.name}</h3>
                    <p className="text-sm text-gray-600">{org.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section id="newsroom" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {newsCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  idx === 0
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
            <p className="text-gray-600 mb-4">Newsroom content will appear here</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">View All Stories</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">Get the latest news and updates delivered to your inbox</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded text-gray-900"
              required
            />
            <Button type="submit" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </form>
          {subscribed && <p className="text-sm mt-4 text-green-100">✓ Thank you for subscribing!</p>}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.slice(0, 3).map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-red-600 hover:text-red-700 font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {quickLinks.slice(3, 6).map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-red-600 hover:text-red-700 font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                {quickLinks.slice(6, 9).map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-red-600 hover:text-red-700 font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white font-bold">🗳️</span>
                </div>
                <div>
                  <div className="font-bold">People Powered</div>
                  <div className="text-xs text-red-400">GEORGIA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">A nonpartisan civic newsroom dedicated to keeping Georgians informed and engaged.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <Phone size={16} /> 1-866-OUR-VOTE (1-866-687-9663)
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> 1-877-524-8683
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Full History</a></li>
                <li><a href="#" className="hover:text-white">Submit a Tip</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-red-400"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-red-400"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-red-400"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-red-400"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 People Powered Georgia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
