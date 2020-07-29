# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all
Roletype.destroy_all
Cause.destroy_all
Task.destroy_all
Job.destroy_all
# JobPostings: dateAdded (str), id(int), description(str), link(str) 
# Cause: id(int) name(str)
# Role Type: id(int), title(str)
# Tasks: id(int), name(str)
# Job Tasks:


google = Company.create(name: 'Google', description: 'search engine', link: 'https://careers.google.com/jobs/')
bayes = Company.create(name: 'Bayes Impact', description: 'data science for social good', link: 'https://www.bayesimpact.org/en/')
blueridge = Company.create(name: 'BlueRidge Labs', description: 'incubator for tech for good ventures in NYC', link: 'https://labs.robinhood.org/')

product = Roletype.create(title: 'product')
developer = Roletype.create(title: 'developer')
misc = Roletype.create(title: 'other')

sellout = Cause.create(name: 'none')
env = Cause.create(name: 'environmental justice')
commOrg = Cause.create(name: 'community organizing')
race = Cause.create(name: 'racial justice')

update_resume = Task.create(name: 'update resume')
outreach = Task.create(name: 'set up an informational interview')
referral = Task.create(name: 'get a referral')

googlePM = Job.create(title: 'associate product manager', dateAdded: '2019-08-01', description: 'product things', link: 'apm', company: google, roletype: product, tasks: [update_resume])
bayesCoordinator = Job.create(title: 'program coordinator', dateAdded: '2020-06-30', description: 'administrative tasks', link:'insert link here', company: bayes, roletype: misc, tasks: [update_resume, outreach, referral])

# binding.pry
# 0