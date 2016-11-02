=begin
  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.
  Usage:
    {% markdown <filename> %}
  Dependency:
    - kramdown
=end
module Jekyll
  # class MarkdownTag < Liquid::Tag
  class MarkdownTag

    puts 'in the plugin'
    
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
      puts 'in the plugin 2'
    end
    
    require "kramdown"
    
    def render(context)
      tmpl = File.read File.join Dir.pwd, "_includes", @text
      site = context.registers[:site]
      tmpl = (Liquid::Template.parse tmpl).render site.site_payload
      html = Kramdown::Document.new(tmpl).to_html
    end

  end
end

Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
# Liquid::Template.register_tag("twitter", TwitterJekyll::TwitterTag)