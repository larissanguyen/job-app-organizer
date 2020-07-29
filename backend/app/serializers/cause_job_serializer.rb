class CauseJobSerializer < ActiveModel::Serializer
  	# attributes :id

  	belongs_to :cause
	belongs_to :job
end
