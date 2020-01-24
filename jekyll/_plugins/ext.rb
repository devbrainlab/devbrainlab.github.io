require 'jekyll/scholar'
require 'jekyll/tagging'

# monkey patch jekyll scholar detail generation so it doesn't append the baseurl

module Jekyll
	class Scholar
		module Utilities

			def details_link_for(entry, base = base_url)
        # Expand the details_permalink template into the complete URL for this entry.

        # First generate placeholders for all items in the bibtex entry
        url_placeholders = {}
        entry.fields.each_pair do |k, v| 
          value = v.to_s.dup
          value = Jekyll::Utils::slugify(value, :mode => 'pretty') unless k == :doi
          url_placeholders[k] = value
        end
        # Maintain the same URLs are previous versions of jekyll-scholar by replicating the way that it
        # processed the key.
        url_placeholders[:key] = entry.key.to_s.gsub(/[:\s]+/, '_')
        url_placeholders[:details_dir] = details_path
        # Autodetect the appropriate file extension based upon the site config, using the same rules as 
        # previous versions of jekyll-scholar. Uses can override these settings by defining a details_permalink
        # without the :extension field.
        if (site.config['permalink'] == 'pretty') || (site.config['permalink'].end_with? '/')
          url_placeholders[:extension] = '/'
        else
          url_placeholders[:extension] = '.html'
        end
        # Overwrite the 'doi' key with the citation key if the DOI field is empty or missing
        if !entry.has_field?('doi') || entry.doi.empty?
          url_placeholders[:doi] = url_placeholders[:key]
        end

        # generate the URL
        # File.join(base, 
        #   URL.new(
        #     :template => config['details_permalink'],
        #     :placeholders => url_placeholders
        #   ).to_s)

        File.join(
          URL.new(
            :template => config['details_permalink'],
            :placeholders => url_placeholders
          ).to_s)
      end
    end
  end
end