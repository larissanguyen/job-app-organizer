class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link

  has_many :jobs
end
