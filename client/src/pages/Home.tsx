import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Stories");

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

  const newsCategories = ["All Stories", "Voting Rights", "Elections", "Civic Education", "Policy & Accountability"];

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
      <header className="sticky top-0 z-50 bg-white border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-xl">🗳️</div>
              <div>
                <div className="font-bold text-gray-900 text-lg">People Powered</div>
                <div className="text-xs text-red-600 font-bold tracking-wide">GEORGIA</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#newsroom" className="text-gray-700 hover:text-red-600 font-medium text-sm">Newsroom</a>
              <a href="#issues" className="text-gray-700 hover:text-red-600 font-medium text-sm">Issues</a>
              <a href="#tools" className="text-gray-700 hover:text-red-600 font-medium text-sm">Civic Tools</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-sm">About</a>
              <a href="#involved" className="text-gray-700 hover:text-red-600 font-medium text-sm">Get Involved</a>
            </nav>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-bold text-sm">Take Action</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs font-bold mb-6 tracking-wide">
                🔴 LIVE CIVIC NEWSROOM
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                Georgia's Democracy<br />
                <span className="text-red-400">Starts with You</span>
              </h1>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-lg">
                People Powered Georgia is a nonpartisan civic newsroom dedicated to keeping Georgians informed, organized, and at the center of their democracy — from the ballot box to the State Capitol.
              </p>
              <div className="flex gap-4 mb-16">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold border-2 border-red-600">
                  📖 Read the Newsroom
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 font-bold">
                  Get Involved →
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-black">500K+</div>
                  <div className="text-xs text-gray-300 font-bold tracking-wide">VOTERS REACHED</div>
                </div>
                <div>
                  <div className="text-5xl font-black">2K+</div>
                  <div className="text-xs text-gray-300 font-bold tracking-wide">VOLUNTEERS</div>
                </div>
                <div>
                  <div className="text-5xl font-black">159</div>
                  <div className="text-xs text-gray-300 font-bold tracking-wide">COUNTIES</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-8 border border-gray-700 backdrop-blur">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-green-400 font-bold text-sm">Live Updates</span>
              </div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-700">
                  <div className="text-xs text-gray-400 font-semibold mb-2">Voting Rights • 2h ago</div>
                  <h3 className="font-bold text-white mb-2 text-base">Henry McNeal Turner Voting Rights Act Advances</h3>
                  <p className="text-sm text-gray-300">Advocates push for stronger state-level protections after federal rollbacks raise alarm across Georgia communities.</p>
                </div>
                <div className="pb-6 border-b border-gray-700">
                  <div className="text-xs text-gray-400 font-semibold mb-2">Election Access • 5h ago</div>
                  <h3 className="font-bold text-white mb-2 text-base">Early Voting Expansion Gains Bipartisan Support</h3>
                  <p className="text-sm text-gray-300">New proposals would add weekend hours and additional drop boxes across rural Georgia counties.</p>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-2">Civic Education • 1d ago</div>
                  <h3 className="font-bold text-white mb-2 text-base">Know Your Polling Rights Workshop — Statewide Tour</h3>
                  <p className="text-sm text-gray-300">Free trainings available in Atlanta, Savannah, Macon and Augusta — helping voters navigate new ID requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Civic Tools Section */}
      <section id="tools" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-gray-900 mb-16 text-center">Civic Tools & Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civicTools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.link}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-red-400 hover:shadow-lg transition-all group"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <div className="text-xs font-black text-red-600 mb-3 tracking-wide">{tool.label}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-gray-900 mb-16 text-center">Partner Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-red-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold mb-4 text-sm">
                  {org.abbr}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{org.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="newsroom" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">Latest News</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-bold text-sm rounded ${
                  activeCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-red-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-center py-16 bg-white rounded-lg border-2 border-gray-200">
            <p className="text-gray-500 font-semibold">Newsroom content will appear here</p>
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold">
              View All Stories
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 text-red-100">Get the latest news and updates delivered to your inbox</p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded text-gray-900 font-medium"
              required
            />
            <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-bold rounded">
              Subscribe
            </button>
          </form>
          {subscribed && <p className="text-green-200 mt-4 font-semibold">Thanks for subscribing!</p>}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-black text-gray-900 mb-4">Voting</h3>
              <ul className="space-y-2">
                {quickLinks.slice(0, 5).map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-red-600 hover:text-red-700 font-semibold text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {quickLinks.slice(5, 9).map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-red-600 hover:text-red-700 font-semibold text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:1-877-524-8683" className="text-red-600 hover:text-red-700 font-semibold">
                    1-877-524-8683
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700 font-semibold">
                    RideToThePoll.com
                  </a>
                </li>
                <li className="flex gap-4 pt-2">
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <Youtube size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2024 People Powered Georgia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
