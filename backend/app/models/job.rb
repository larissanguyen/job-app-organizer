class Job < ApplicationRecord
	has_many :jobTasks
	has_many :tasks, through: :jobTasks
	has_many :causeJobs
	has_many :causes, through: :causeJobs
	belongs_to :company
	belongs_to :roletype
end

