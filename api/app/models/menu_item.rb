class MenuItem < ApplicationRecord
  # Relations
  belongs_to :menu_category
  has_many :item_sizes
  has_many :dietary_instances

  mount_uploader :photo, PhotoUploader

  # Validations
  validates_presence_of :name, :menu_category_id
end
