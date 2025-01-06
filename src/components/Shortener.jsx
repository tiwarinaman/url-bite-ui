import React, {useState} from 'react';
import axios from 'axios';
import {Copy, Check} from 'lucide-react';

const Shortener = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleGenerate = async () => {
        if (!longUrl) {
            setError('Please enter a valid URL');
            setShortUrl('');
            return;
        }

        setLoading(true);
        setError('');
        setShortUrl('');

        try {
            const response = await axios.post('https://api.url-bite.namanbytes.dev/shorten', {
                original_url: longUrl,
            });

            setShortUrl(response.data.short_url);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            // Reset copied state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
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
                    disabled={loading}
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
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                                copied
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            }`}
                        >
                            {copied ? (
                                <>
                                    <Check size={16}/>
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16}/>
                                    <span>Copy URL</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shortener;
