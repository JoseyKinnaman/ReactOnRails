class ListsController < ApplicationController
  before_action :set_project



  def create
    @project = Project.find(params[:project_id])
    @project.lists.create!(params[:list]).permit(:content)
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
    @list.update_attributes(params[:item].permit(:content))
  end

  def destroy
    @list.destroy
    # @item.destroy
  end

  private

  def set_project
    @project = Project.where(id: get_list.project_id).first!
  end

  def get_list
    @list ||= List.where(id: params[:id]).first!
  end
end
