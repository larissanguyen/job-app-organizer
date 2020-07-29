class Task < ApplicationRecord
	has_many :jobTasks
	has_many :jobs, through: :jobTasks
end
