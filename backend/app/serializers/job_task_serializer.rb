class JobTaskSerializer < ActiveModel::Serializer
	attributes :task_id, :complete

  	belongs_to :task
	belongs_to :job
end
