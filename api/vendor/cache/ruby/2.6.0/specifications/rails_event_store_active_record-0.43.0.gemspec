# -*- encoding: utf-8 -*-
# stub: rails_event_store_active_record 0.43.0 ruby lib

Gem::Specification.new do |s|
  s.name = "rails_event_store_active_record".freeze
  s.version = "0.43.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/RailsEventStore/rails_event_store/issues", "changelog_uri" => "https://github.com/RailsEventStore/rails_event_store/releases", "homepage_uri" => "https://railseventstore.org/", "source_code_uri" => "https://github.com/RailsEventStore/rails_event_store" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Arkency".freeze]
  s.bindir = "exe".freeze
  s.date = "2020-02-26"
  s.description = "Implementation of events repository based on Rails Active Record for Rails Event Store".freeze
  s.email = ["dev@arkency.com".freeze]
  s.homepage = "https://railseventstore.org".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Active Record events repository for Rails Event Store".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 3.0"])
      s.add_runtime_dependency(%q<activemodel>.freeze, [">= 3.0"])
      s.add_runtime_dependency(%q<activerecord-import>.freeze, [">= 1.0.2"])
    else
      s.add_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<activesupport>.freeze, [">= 3.0"])
      s.add_dependency(%q<activemodel>.freeze, [">= 3.0"])
      s.add_dependency(%q<activerecord-import>.freeze, [">= 1.0.2"])
    end
  else
    s.add_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<activesupport>.freeze, [">= 3.0"])
    s.add_dependency(%q<activemodel>.freeze, [">= 3.0"])
    s.add_dependency(%q<activerecord-import>.freeze, [">= 1.0.2"])
  end
end
