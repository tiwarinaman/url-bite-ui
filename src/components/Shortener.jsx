import React, {useState} from 'react';
import axios from 'axios';

const Shortener = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading

    const handleGenerate = async () => {
        if (!longUrl) {
            setError('Please enter a valid URL');
            setShortUrl('');
            return;
        }

        setLoading(true); // Show loader
        setError(''); // Clear any previous errors
        setShortUrl(''); // Clear any previous short URL

        try {
            const response = await axios.post('https://api.url-bite.namanbytes.dev/shorten', {
                original_url: longUrl,
            });

            setShortUrl(response.data.short_url); // Update short URL with API response
        } catch (err) {
            console.error(err);
            setError('Failed to generate the short URL. Please try again.');
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        alert('Short URL copied to clipboard!');
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Paste your long URL here"
                    className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-800 text-white border border-neutral-700"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                />
                <button
                    onClick={handleGenerate}
                    className={`px-8 py-3 text-white rounded-lg font-semibold transition duration-300 ${
                        loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Loading...' : 'Shorten Now'}
                </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {shortUrl && (
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-500 mb-1">Shortened URL:</p>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-medium">{shortUrl}</p>
                        <button onClick={handleCopy} className="text-blue-500 hover:text-blue-600">
                            Copy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shortener;
