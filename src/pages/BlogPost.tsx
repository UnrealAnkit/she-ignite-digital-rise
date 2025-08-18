import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
import { fetchBlogPostById, BlogPost } from "@/lib/blogService";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
c
  useEffect(() => {
    if (slug) {
      fetchBlogPostById(slug)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch(() => {
          setPost(null);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bookmark className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Simple Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Blog Image - Fixed Size */}
          {post.image_url && (
            <div className="mb-8">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Article Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.read_time}</span>
              </div>
            </div>
            
            {/* Share and Save Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-base md:text-lg leading-relaxed text-gray-800">
                {post.content}
              </div>
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Never Miss an Insight
            </h3>
            <p className="text-gray-600 mb-6">
              Get our latest articles, exclusive tips, and business strategies 
              delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button 
                size="default"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Join 2,000+ entrepreneurs. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 