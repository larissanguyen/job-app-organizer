class TaskSerializer < ActiveModel::Serializer
	attributes :id, :name

	has_many :jobTasks
	has_many :jobs, through: :jobTasks
end
