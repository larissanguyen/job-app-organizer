class JobSerializer < ActiveModel::Serializer
  attributes :title, :description, :link

  	has_many :jobTasks
	has_many :tasks, through: :jobTasks
	belongs_to :company
	belongs_to :roletype
end
