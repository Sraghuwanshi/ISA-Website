  $(document).ready(function () {
        
      $('#contact_form').bootstrapValidator({
          // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
          feedbackIcons: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
          },
          fields: {

              full_name: {
                  validators: {
                      stringLength: {
                          min: 4,
                      },
                      notEmpty: {
                          message: 'Please supply your Full Legal Name'
                      }
                  }
              },
              gender: {
                  validators: {
                      notEmpty: {
                          message: 'Please select your Gender'
                      }
                  }
              },
              major: {
                  validators: {
                      notEmpty: {
                          message: 'Please select your Major'
                      }
                  }
              },
              enroll: {
                  validators: {
                      notEmpty: {
                          message: 'Please select your Enrollment'
                      }
                  }
              },
              date: {
                  validators: {
                      notEmpty: {
                          message: 'The date is required'
                      },
                      date: {
                          format: 'MM/DD/YYYY',
                          message: 'The date is not a valid'
                      }
                  }
              },
              first_name: {
                  validators: {
                      stringLength: {
                          min: 2,
                      },
                      notEmpty: {
                          message: 'Please supply your first name'
                      }
                  }
              },
              last_name: {
                  validators: {
                      stringLength: {
                          min: 2,
                      },
                      notEmpty: {
                          message: 'Please supply your last name'
                      }
                  }
              },

              anumber: {
                  stringLength: {
                      min: 5,
                  },
                  validators: {
                      notEmpty: {
                          message: 'Please supply your A# Number'
                      }
                  }
              },
              email: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply your email address'
                      },
                      emailAddress: {
                          message: 'Please supply a valid email address'
                      }
                  }
              },
              phone: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply your phone number'
                      },
                      phone: {
                          country: 'US',
                          message: 'Please supply a vaild phone number with area code'
                      }
                  }
              },
              address: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply you complete Mailing Address'
                      }
                  }
              },
                Q1: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply you complete Mailing Address'
                      }
                  }
              },
               Q2: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply you complete Mailing Address'
                      }
                  }
              },
               Q3: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply you complete Mailing Address'
                      }
                  }
              },
               Q4: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply you complete Mailing Address'
                      }
                  }
              },
              position : {
                  validators: {
                      notEmpty: {
                          message: 'Please select your interested position'
                      }
                  }
              },
              comment: {
                  validators: {
                      stringLength: {
                          min: 10,
                          max: 200,
                          message: 'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply a description of your project'
                      }
                  }
              }
          }
      });

  });
