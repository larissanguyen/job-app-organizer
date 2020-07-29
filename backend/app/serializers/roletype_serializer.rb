class RoletypeSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :jobs
end
