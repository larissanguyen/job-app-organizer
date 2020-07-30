class JobTask < ApplicationRecord
	belongs_to :task
	belongs_to :job

	after_initialize :init

    def init
      self.complete = false
    end
end
