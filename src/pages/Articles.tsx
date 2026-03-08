import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "I Couldn't Find a Place to Practice AI Evals, So I Built One",
    description: "What a Product Manager learns by shipping an AI feature with 'bare hands'.",
    date: "2025-03-05",
    readTime: "3 min read",
    tags: ["AI", "Product Management", "Building"],
    url: "https://medium.com/@ioanaa.cristinaa/i-couldnt-find-a-place-to-practice-ai-evals-so-i-built-one-3bdbd48d01dd",
  },
  {
    title: "How to Create a Culture of Ownership",
    description: "When people own their work end to end, there are no loose ends, no bystander effect, and things don't fall between the cracks. A practical guide to building ownership-driven teams.",
    date: "2024-03-15",
    readTime: "10 min read",
    tags: ["Ownership", "Leadership", "Culture Change"],
    url: "https://medium.com/@ioanaa.cristinaa/how-to-create-a-culture-of-ownership-aa0ffd6ab431",
  },
  {
    title: "Big Product Organizations — What to Look Out for During the PM Interview",
    description: "Key signals to watch for when interviewing at large product organizations, and how to assess whether the environment will set you up for success.",
    date: "2023-02-23",
    readTime: "6 min read",
    tags: ["Product Management", "Career"],
    url: "https://medium.com/@ioanaa.cristinaa/big-product-organizations-what-to-look-for-during-the-interview-1a45d8c48e8",
  },
  {
    title: "What Is Your Stress Face? — From Failure, With Love",
    description: "Understanding how stress manifests in our behavior, and how self-awareness can turn failure into a powerful growth tool.",
    date: "2022-09-18",
    readTime: "8 min read",
    tags: ["Leadership", "Self-Awareness"],
    url: "https://medium.com/@ioanaa.cristinaa/what-is-your-stress-face-from-failure-with-love-ad08d1cf2f64",
  },
  {
    title: "The Path from Learned Helplessness to Empowerment",
    description: "How leaders influence the relationship people have with their own power, and what it takes to break the cycle of learned helplessness.",
    date: "2023-02-02",
    readTime: "4 min read",
    tags: ["Leadership", "Empowerment"],
    url: "https://medium.com/@ioanaa.cristinaa/the-path-from-learned-helplessness-to-empowerment-41c50335e016",
  },
  {
    title: "The Hard Truth About Changing Jobs, and Why I Find It Healthy",
    description: "An honest look at what it really means to change jobs — the discomfort, the growth, and why staying too comfortable might be the bigger risk.",
    date: "2022-08-14",
    readTime: "7 min read",
    tags: ["Career", "Self-Awareness"],
    url: "https://medium.com/@ioanaa.cristinaa/the-hard-truth-about-changing-jobs-and-why-i-find-it-healthy-5088c9154aa3",
  },
  {
    title: "Being a Communicator… with a Half-Language",
    description: "What happens when communication is your superpower — but you're operating in a language you haven't fully mastered yet. A personal reflection on identity and expression abroad.",
    date: "2022-06-04",
    readTime: "5 min read",
    tags: ["Self-Awareness", "Communication"],
    url: "https://medium.com/@ioanaa.cristinaa/being-a-communicator-with-a-half-language-36aa79de3a58",
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
                Thoughts on leadership, product and self-awareness
              </p>
            </div>

            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => (article as any).url && window.open((article as any).url, '_blank')}
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
