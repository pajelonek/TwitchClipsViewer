module Errors
  class WrongRequest < Errors::StandardError
    def initialize
      super(
        title: "Wrong request",
        status: 400,
        detail: "Request to the server is wrong, please contact me via github",
        source: { pointer: "/request/url/:id" }
      )
    end
  end
end
