import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils } from "lucide-react"

export default function PotatoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="bg-primary text-primary-foreground py-5 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Potato Website</h1>
          <nav className="flex gap-7">
            <a href="#about" className="hover:underline text-sm">
              About
            </a>
            <a href="#types" className="hover:underline text-sm">
              Types
            </a>
            <a href="#facts" className="hover:underline text-sm">
              Facts
            </a>
            <a href="#recipes" className="hover:underline text-sm">
              Recipes
            </a>
            <a href="#history" className="hover:underline text-sm">
              History
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-5 text-balance">Welcome to the Potato Information Site</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl text-pretty leading-relaxed">
                Potatoes are a very important vegetable. They are used in many dishes around the world and have been
                cultivated for thousands of years. Learn more about potatoes on this website.
              </p>
              <Button size="lg" className="mt-2">
                Learn More
              </Button>
            </div>
            <div className="aspect-video relative bg-muted rounded-lg overflow-hidden shadow-sm">
              <img src="/fresh-potatoes-on-rustic-background.jpg" alt="Fresh potatoes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Potatoes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Potatoes (Solanum tuberosum) are a starchy root vegetable that originated in South America. They were
                first domesticated thousands of years ago by indigenous peoples in the Andes mountains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, potatoes are the fourth-largest food crop in the world. They are grown in over 150 countries and
                provide essential nutrition to billions of people. Potatoes can be prepared in many different ways
                including baking, frying, boiling, and roasting.
              </p>
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-5">Quick Facts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>Over 5,000 varieties exist worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>China is the largest producer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>High in vitamin C and potassium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>Naturally gluten-free and fat-free</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section id="types" className="bg-amber-50/70 py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-balance">Popular Potato Varieties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              From starchy russets to waxy fingerlings, each variety brings unique flavors and textures to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {varieties.map((variety, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={variety.image || "/placeholder.svg"}
                    alt={variety.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif text-xl font-bold mb-3">{variety.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{variety.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {variety.uses.map((use, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                        {use}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="facts" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Nutritional Powerhouse</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Potatoes are more than just comfort food. They're packed with essential nutrients, vitamins, and
                minerals that support a healthy lifestyle.
              </p>

              <div className="space-y-7">
                {nutrition.map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Card className="p-7 text-center">
                <div className="text-4xl font-bold text-primary mb-3">110</div>
                <div className="text-sm text-muted-foreground">Calories per potato</div>
              </Card>
              <Card className="p-7 text-center">
                <div className="text-4xl font-bold text-primary mb-3">26g</div>
                <div className="text-sm text-muted-foreground">Carbohydrates</div>
              </Card>
              <Card className="p-7 text-center">
                <div className="text-4xl font-bold text-primary mb-3">3g</div>
                <div className="text-sm text-muted-foreground">Protein</div>
              </Card>
              <Card className="p-7 text-center">
                <div className="text-4xl font-bold text-primary mb-3">620mg</div>
                <div className="text-sm text-muted-foreground">Potassium</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Section */}
      <section id="recipes" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-balance">Cooking with Potatoes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              From classic comfort foods to innovative culinary creations, potatoes adapt to every cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                <div className="aspect-square relative bg-muted overflow-hidden">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-1.5">{recipe.name}</h3>
                  <p className="text-sm text-muted-foreground">{recipe.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Utensils className="w-4 h-4" /> View All Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center text-balance">A Brief History</h2>

          <div className="space-y-14">
            {history.map((item, index) => (
              <div key={index} className="flex gap-10">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-primary">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 px-4 mt-16 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-3">© 2025 Potato Website. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Contact us at info@potatowebsite.com</p>
        </div>
      </footer>
    </div>
  )
}

const varieties = [
  {
    name: "Russet Burbank",
    description:
      "The classic baking potato with fluffy interior and thick skin. Perfect for fries and mashed potatoes.",
    image: "/russet-potatoes.jpg",
    uses: ["Baking", "Frying", "Mashing"],
  },
  {
    name: "Yukon Gold",
    description: "Buttery yellow flesh with a naturally creamy texture. Versatile all-purpose potato.",
    image: "/yukon-gold-potatoes.jpg",
    uses: ["Roasting", "Boiling", "Salads"],
  },
  {
    name: "Red Bliss",
    description: "Waxy texture with thin red skin. Holds shape well when cooked, ideal for potato salad.",
    image: "/red-potatoes.jpg",
    uses: ["Boiling", "Salads", "Roasting"],
  },
  {
    name: "Fingerling",
    description: "Small, elongated potatoes with nutty flavor. Gourmet choice for roasting whole.",
    image: "/fingerling-potatoes.jpg",
    uses: ["Roasting", "Grilling", "Salads"],
  },
  {
    name: "Purple Majesty",
    description: "Striking deep purple color throughout. Rich in antioxidants with earthy flavor.",
    image: "/purple-potatoes.jpg",
    uses: ["Roasting", "Baking", "Salads"],
  },
  {
    name: "New Potatoes",
    description: "Young, small potatoes harvested early. Tender skin and sweet, delicate flavor.",
    image: "/new-baby-potatoes.jpg",
    uses: ["Boiling", "Steaming", "Salads"],
  },
]

const nutrition = [
  {
    icon: "K",
    title: "High in Potassium",
    description: "Contains more potassium than bananas, supporting heart health and blood pressure regulation.",
  },
  {
    icon: "C",
    title: "Vitamin C Boost",
    description: "One medium potato provides 30% of daily vitamin C needs for immune system support.",
  },
  {
    icon: "B6",
    title: "B Vitamins",
    description: "Rich in B6 and other B vitamins essential for energy metabolism and brain function.",
  },
  {
    icon: "Fe",
    title: "Essential Minerals",
    description: "Good source of iron, magnesium, and phosphorus for overall health and vitality.",
  },
]

const recipes = [
  {
    name: "Classic Mashed Potatoes",
    time: "25 minutes",
    image: "/creamy-mashed-potatoes.jpg",
  },
  {
    name: "Crispy Roasted Potatoes",
    time: "45 minutes",
    image: "/crispy-roasted-potatoes.jpg",
  },
  {
    name: "Potato Gratin",
    time: "1 hour",
    image: "/potato-gratin.jpg",
  },
  {
    name: "Loaded Baked Potato",
    time: "1 hour",
    image: "/loaded-baked-potato.jpg",
  },
]

const history = [
  {
    year: "6000 BC",
    title: "Ancient Origins",
    description:
      "Potatoes were first domesticated by indigenous peoples in the Andes mountains of Peru and Bolivia, becoming a staple crop for ancient civilizations.",
  },
  {
    year: "1536",
    title: "European Discovery",
    description:
      "Spanish conquistadors encountered the potato in Peru and brought it back to Europe, though it faced initial resistance and suspicion.",
  },
  {
    year: "1845",
    title: "Irish Potato Famine",
    description:
      "The Great Famine in Ireland highlighted both the importance and risks of potato dependence, leading to major agricultural and social changes.",
  },
  {
    year: "Today",
    title: "Global Staple",
    description:
      "Now the world's fourth-largest food crop, potatoes feed billions and adapt to diverse climates, cuisines, and cooking methods worldwide.",
  },
]
