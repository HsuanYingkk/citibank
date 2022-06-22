from flask import Flask, request
from flask_cors import CORS
from json import dumps

from company_listall import company_listall
from company_search_keyword import company_search_keyword
from company_search_category import company_search_category
from company_view import company_view
from company_categories import company_categories

def default_handler(err):
    ''' Default Handle '''
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response

APP = Flask(__name__)
CORS(APP)

APP.config['TRAP_HTTP_EXCEPTIONS'] = True
APP.register_error_handler(Exception, default_handler)

##### COMPANY ROUTE #####

@APP.route("/company/listall", methods=['GET'])
def company_listall_root():
    ''' Return company information '''
    return dumps(company_listall())

@APP.route("/company/search_keyword", methods=['GET'])
def company_search_keyword_root():
    ''' List the companies that have the keyword '''
    keyword = request.args.get('keyword')
    return dumps(
        company_search_keyword(keyword)
    )

@APP.route("/company/search_category", methods=['GET'])
def company_search_label_root():
    ''' List the companies that matches the category '''
    label = request.args.get('category')
    return dumps(
        company_search_category(label)
    )

@APP.route("/company/view", methods=['GET'])
def company_view_root():
    ''' Return company information '''
    company_id = request.args.get('company_id')
    return dumps(
        company_view(company_id)
    )

@APP.route("/company/categories", methods=['GET'])
def company_categories_root():
    ''' Return company information '''
    return dumps(company_categories())

if __name__ == "__main__":
    APP.run()
