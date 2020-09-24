module Result
  class Error < Base
    attr_reader :errors, :exception

    def initialize(msg, exception: nil, type: nil)
      @exception = exception
      @errors = ErrorContainer.new(msg: msg, type: type)
    end

    def successful?
      false
    end

    def value
      nil
    end

    # Result is a wrapper. It can contain either a proper value or a set of
    # errors.
    #
    # The purpose of this method is to see what's inside. If it is a value you
    # get it back.
    #
    # If it is a set of errors, you get them raised as exceptions.
    #
    # @example
    #
    #   class MyController < ApplicationController
    #     def create
    #       my_obj = CreateInteractor
    #         .call(params)
    #         .unwrap!
    #
    #       render json: my_obj
    #     end
    #   end
    #
    # If this interactor succeeds, it will give you back a proper
    # Result::Ok.new(value) thing.
    #
    # If it doesn't, unwrap will raise an `UnwrapException` and
    # halt any further processing.
    def unwrap!
      raise UnwrapException.new(
        'Unhandled unwrap exception',
        self
      )
    end

    def bind(&_block)
      self
    end

    def when_ok(&block)
      self
    end

    # Yields the value to the given block and then return the current result.
    #
    # In case it is an ok it just returns the result instead.
    def when_err(&block)
      block.call(errors)

      self
    end
  end
end
