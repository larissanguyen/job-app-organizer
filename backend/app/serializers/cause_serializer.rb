class CauseSerializer < ActiveModel::Serializer
	attributes :id, :name

	has_many :causeJobs
	has_many :jobs, through: :causeJobs
end
