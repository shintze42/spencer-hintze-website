import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Show success message (you can replace this with a toast notification)
    alert('Thank you for your message! I\'ll get back to you within 24 hours!');
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind or just want to connect? I'd love to hear from you. I'll get back to you within 24 hours!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center">
              You can also reach me through{' '}
              <a
                href="mailto:shintze42@icloud.com"
                className="text-white hover:underline"
              >
                email
              </a>{' '}
              or connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/spencer-hintze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

