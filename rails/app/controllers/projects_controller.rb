class ProjectsController < ApplicationController
  def index
    @projects = Project.order(:name)
  end

  def sort
    params[:list].each_with_index do |id, index|
      @project.lists.where(id: id).update_all(position: index + 1)
    end
    head 200
  end
end
