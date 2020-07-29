class JobSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :link

  	has_many :jobTasks
	has_many :tasks, through: :jobTasks
	has_many :causeJobs
	has_many :causes, through: :causeJobs
	belongs_to :company
	belongs_to :roletype
end
