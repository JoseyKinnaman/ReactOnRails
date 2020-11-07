class List < ApplicationRecord
  belongs_to :project

  has_many :items, -> { order(:position) }, dependent: :destroy

  validates_presence_of :name
end
