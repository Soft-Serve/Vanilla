class Restaurant < ApplicationRecord
  HEXIDECIMAL_REGEX = /\A^#(?:[0-9a-fA-F]{3}){1,2}$\z/.freeze
  CURRENCIES = {
      cad: 'CAD'
  }.freeze

  DEFAULT_PRIMARY = '#FF1654'.freeze
  DEFAULT_SECONDARY = '#2D3142'.freeze

  mount_uploader :logo, PhotoUploader
  # Relations
  has_many :menus
  has_many :dietaries
  has_many :users

  # Validations
  validates_presence_of :name
  validates :primary_colour, format: { with: HEXIDECIMAL_REGEX }
  validates :secondary_colour, format: { with: HEXIDECIMAL_REGEX }
  validates :currency, inclusion: { in: CURRENCIES.values }, allow_nil: false
end
