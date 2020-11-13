class ListsController < ApplicationController
  before_action :set_list, only: %i[edit update destroy]

  def create
    @project = Project.find(params[:project_id])
    @list = @project.lists.create params[:list].permit(:name)
  end

  def edit;
    @list = List.find(params[:id])
  end

  def sort
    params[:item].each_with_index do |id, index|
      @project.items.where(id: id).update_all(position: index + 1)
    end
    head 200
  end

  def update
    @list.update_attributes(params[:list].permit(:name))
  end

  def destroy
    @list.destroy
  end

  private

  def set_list
    @list = List.where(id: params[:id]).first!
  end

end
