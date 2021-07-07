# -*- encoding: utf-8 -*-
# stub: rails_event_store 0.43.0 ruby lib

Gem::Specification.new do |s|
  s.name = "rails_event_store".freeze
  s.version = "0.43.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/RailsEventStore/rails_event_store/issues", "changelog_uri" => "https://github.com/RailsEventStore/rails_event_store/releases", "homepage_uri" => "https://railseventstore.org/", "source_code_uri" => "https://github.com/RailsEventStore/rails_event_store" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Arkency".freeze]
  s.bindir = "exe".freeze
  s.date = "2020-02-26"
  s.description = "Implementation of Event Store in Ruby".freeze
  s.email = ["dev@arkency.com".freeze]
  s.homepage = "https://railseventstore.org".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Event Store in Ruby".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<ruby_event_store-browser>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<rails_event_store_active_record>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<aggregate_root>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<bounded_context>.freeze, ["= 0.43.0"])
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 3.0"])
      s.add_runtime_dependency(%q<activemodel>.freeze, [">= 3.0"])
      s.add_runtime_dependency(%q<activejob>.freeze, [">= 3.0"])
      s.add_runtime_dependency(%q<arkency-command_bus>.freeze, [">= 0.4"])
    else
      s.add_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<ruby_event_store-browser>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<rails_event_store_active_record>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<aggregate_root>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<bounded_context>.freeze, ["= 0.43.0"])
      s.add_dependency(%q<activesupport>.freeze, [">= 3.0"])
      s.add_dependency(%q<activemodel>.freeze, [">= 3.0"])
      s.add_dependency(%q<activejob>.freeze, [">= 3.0"])
      s.add_dependency(%q<arkency-command_bus>.freeze, [">= 0.4"])
    end
  else
    s.add_dependency(%q<ruby_event_store>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<ruby_event_store-browser>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<rails_event_store_active_record>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<aggregate_root>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<bounded_context>.freeze, ["= 0.43.0"])
    s.add_dependency(%q<activesupport>.freeze, [">= 3.0"])
    s.add_dependency(%q<activemodel>.freeze, [">= 3.0"])
    s.add_dependency(%q<activejob>.freeze, [">= 3.0"])
    s.add_dependency(%q<arkency-command_bus>.freeze, [">= 0.4"])
  end
end
