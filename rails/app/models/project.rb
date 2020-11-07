class Project < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :items, through: :lists

  validates_presence_of :name
end
