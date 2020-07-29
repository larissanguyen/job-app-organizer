class Cause < ApplicationRecord
	has_many :causeJobs
	has_many :jobs, through: :causeJobs
end
