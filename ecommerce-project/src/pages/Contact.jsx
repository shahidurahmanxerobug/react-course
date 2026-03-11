import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-10">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500">
          We'd love to hear from you. Send us a message.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <Mail className="text-indigo-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-500">support@warismarketplace.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-indigo-600" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-500">+968 9000 0000</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-indigo-600" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-500">
                Muscat, Oman
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Muscat,Oman&output=embed"
              className="w-full h-64 rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}