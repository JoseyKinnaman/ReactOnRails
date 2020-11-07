class Item < ApplicationRecord
  belongs_to :list

  acts_as_list scope: :list

  validates_presence_of :content
end
