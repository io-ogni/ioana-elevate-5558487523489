import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "Building Products That Matter",
    description: "How to focus on value delivery and avoid feature bloat in modern product development.",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Product Management", "Strategy"],
  },
  {
    title: "The Art of Interim Leadership",
    description: "What it takes to hit the ground running and deliver impact in the first 30 days.",
    date: "2024-02-20",
    readTime: "7 min read",
    tags: ["Leadership", "Interim"],
  },
  {
    title: "Scaling Agile Across Organizations",
    description: "Lessons learned from implementing agile practices in teams of 5 to 50 people.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Agile", "Process"],
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Articles &{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Thoughts on product management, leadership, and building valuable products
              </p>
            </div>

            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button variant="ghost" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
