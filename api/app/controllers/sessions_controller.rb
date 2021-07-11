class SessionsController < Devise::SessionsController

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)

    yield resource if block_given?
    ::UserPresenter.new(resource).serialize
  end

  # DELETE /resource/sign_out
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
  end

  private
  def verify_signed_out_user
    if all_signed_out?
      set_flash_message! :notice, :already_signed_out

      # respond_to_on_destroy
    end
  end
end
