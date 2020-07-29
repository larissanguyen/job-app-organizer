class CreateCauseJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :cause_jobs do |t|
      t.string :cause_id
      t.string :job_id

      t.timestamps
    end
  end
end
