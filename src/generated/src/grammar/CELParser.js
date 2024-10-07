// Generated from src/grammar/CEL.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CELListener from './CELListener.js';
import CELVisitor from './CELVisitor.js';

const serializedATN = [4,1,36,209,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,5,2,41,8,2,10,
2,12,2,44,9,2,1,3,1,3,1,3,5,3,49,8,3,10,3,12,3,52,9,3,1,4,1,4,1,4,1,4,1,
4,1,4,5,4,60,8,4,10,4,12,4,63,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,
5,74,8,5,10,5,12,5,77,9,5,1,6,1,6,4,6,81,8,6,11,6,12,6,82,1,6,1,6,4,6,87,
8,6,11,6,12,6,88,1,6,3,6,92,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,102,
8,7,1,7,3,7,105,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,115,8,7,1,7,3,7,
118,8,7,1,7,5,7,121,8,7,10,7,12,7,124,9,7,1,8,3,8,127,8,8,1,8,1,8,1,8,3,
8,132,8,8,1,8,3,8,135,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,143,8,8,1,8,3,8,146,
8,8,1,8,1,8,1,8,3,8,151,8,8,1,8,3,8,154,8,8,1,8,1,8,3,8,158,8,8,1,9,1,9,
1,9,5,9,163,8,9,10,9,12,9,166,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,
175,8,10,10,10,12,10,178,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,
11,188,8,11,10,11,12,11,191,9,11,1,12,3,12,194,8,12,1,12,1,12,1,12,3,12,
199,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,207,8,12,1,12,0,3,8,10,14,13,
0,2,4,6,8,10,12,14,16,18,20,22,24,0,3,1,0,1,7,1,0,23,25,2,0,18,18,22,22,
235,0,26,1,0,0,0,2,29,1,0,0,0,4,37,1,0,0,0,6,45,1,0,0,0,8,53,1,0,0,0,10,
64,1,0,0,0,12,91,1,0,0,0,14,93,1,0,0,0,16,157,1,0,0,0,18,159,1,0,0,0,20,
167,1,0,0,0,22,179,1,0,0,0,24,206,1,0,0,0,26,27,3,2,1,0,27,28,5,0,0,1,28,
1,1,0,0,0,29,35,3,4,2,0,30,31,5,20,0,0,31,32,3,4,2,0,32,33,5,21,0,0,33,34,
3,2,1,0,34,36,1,0,0,0,35,30,1,0,0,0,35,36,1,0,0,0,36,3,1,0,0,0,37,42,3,6,
3,0,38,39,5,9,0,0,39,41,3,6,3,0,40,38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,
0,42,43,1,0,0,0,43,5,1,0,0,0,44,42,1,0,0,0,45,50,3,8,4,0,46,47,5,8,0,0,47,
49,3,8,4,0,48,46,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,7,
1,0,0,0,52,50,1,0,0,0,53,54,6,4,-1,0,54,55,3,10,5,0,55,61,1,0,0,0,56,57,
10,1,0,0,57,58,7,0,0,0,58,60,3,8,4,2,59,56,1,0,0,0,60,63,1,0,0,0,61,59,1,
0,0,0,61,62,1,0,0,0,62,9,1,0,0,0,63,61,1,0,0,0,64,65,6,5,-1,0,65,66,3,12,
6,0,66,75,1,0,0,0,67,68,10,2,0,0,68,69,7,1,0,0,69,74,3,10,5,3,70,71,10,1,
0,0,71,72,7,2,0,0,72,74,3,10,5,2,73,67,1,0,0,0,73,70,1,0,0,0,74,77,1,0,0,
0,75,73,1,0,0,0,75,76,1,0,0,0,76,11,1,0,0,0,77,75,1,0,0,0,78,92,3,14,7,0,
79,81,5,19,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,
84,1,0,0,0,84,92,3,14,7,0,85,87,5,18,0,0,86,85,1,0,0,0,87,88,1,0,0,0,88,
86,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,92,3,14,7,0,91,78,1,0,0,0,91,80,
1,0,0,0,91,86,1,0,0,0,92,13,1,0,0,0,93,94,6,7,-1,0,94,95,3,16,8,0,95,122,
1,0,0,0,96,97,10,3,0,0,97,98,5,16,0,0,98,104,5,36,0,0,99,101,5,14,0,0,100,
102,3,18,9,0,101,100,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,105,5,15,
0,0,104,99,1,0,0,0,104,105,1,0,0,0,105,121,1,0,0,0,106,107,10,2,0,0,107,
108,5,10,0,0,108,109,3,2,1,0,109,110,5,11,0,0,110,121,1,0,0,0,111,112,10,
1,0,0,112,114,5,12,0,0,113,115,3,20,10,0,114,113,1,0,0,0,114,115,1,0,0,0,
115,117,1,0,0,0,116,118,5,17,0,0,117,116,1,0,0,0,117,118,1,0,0,0,118,119,
1,0,0,0,119,121,5,13,0,0,120,96,1,0,0,0,120,106,1,0,0,0,120,111,1,0,0,0,
121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,15,1,0,0,0,124,122,1,
0,0,0,125,127,5,16,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,
134,5,36,0,0,129,131,5,14,0,0,130,132,3,18,9,0,131,130,1,0,0,0,131,132,1,
0,0,0,132,133,1,0,0,0,133,135,5,15,0,0,134,129,1,0,0,0,134,135,1,0,0,0,135,
158,1,0,0,0,136,137,5,14,0,0,137,138,3,2,1,0,138,139,5,15,0,0,139,158,1,
0,0,0,140,142,5,10,0,0,141,143,3,18,9,0,142,141,1,0,0,0,142,143,1,0,0,0,
143,145,1,0,0,0,144,146,5,17,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,
1,0,0,0,147,158,5,11,0,0,148,150,5,12,0,0,149,151,3,22,11,0,150,149,1,0,
0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,154,5,17,0,0,153,152,1,0,0,0,153,
154,1,0,0,0,154,155,1,0,0,0,155,158,5,13,0,0,156,158,3,24,12,0,157,126,1,
0,0,0,157,136,1,0,0,0,157,140,1,0,0,0,157,148,1,0,0,0,157,156,1,0,0,0,158,
17,1,0,0,0,159,164,3,2,1,0,160,161,5,17,0,0,161,163,3,2,1,0,162,160,1,0,
0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,19,1,0,0,0,166,164,
1,0,0,0,167,168,5,36,0,0,168,169,5,21,0,0,169,176,3,2,1,0,170,171,5,17,0,
0,171,172,5,36,0,0,172,173,5,21,0,0,173,175,3,2,1,0,174,170,1,0,0,0,175,
178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,21,1,0,0,0,178,176,1,0,0,
0,179,180,3,2,1,0,180,181,5,21,0,0,181,189,3,2,1,0,182,183,5,17,0,0,183,
184,3,2,1,0,184,185,5,21,0,0,185,186,3,2,1,0,186,188,1,0,0,0,187,182,1,0,
0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,23,1,0,0,0,191,189,
1,0,0,0,192,194,5,18,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,
195,207,5,32,0,0,196,207,5,33,0,0,197,199,5,18,0,0,198,197,1,0,0,0,198,199,
1,0,0,0,199,200,1,0,0,0,200,207,5,31,0,0,201,207,5,34,0,0,202,207,5,35,0,
0,203,207,5,26,0,0,204,207,5,27,0,0,205,207,5,28,0,0,206,193,1,0,0,0,206,
196,1,0,0,0,206,198,1,0,0,0,206,201,1,0,0,0,206,202,1,0,0,0,206,203,1,0,
0,0,206,204,1,0,0,0,206,205,1,0,0,0,207,25,1,0,0,0,29,35,42,50,61,73,75,
82,88,91,101,104,114,117,120,122,126,131,134,142,145,150,153,157,164,176,
189,193,198,206];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CELParser extends antlr4.Parser {

    static grammarFileName = "CEL.g4";
    static literalNames = [ null, "'=='", "'!='", "'in'", "'<'", "'<='", 
                            "'>='", "'>'", "'&&'", "'||'", "'['", "']'", 
                            "'{'", "'}'", "'('", "')'", "'.'", "','", "'-'", 
                            "'!'", "'?'", "':'", "'+'", "'*'", "'/'", "'%'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, "EQUALS", "NOT_EQUALS", "IN", "LESS", 
                             "LESS_EQUALS", "GREATER_EQUALS", "GREATER", 
                             "LOGICAL_AND", "LOGICAL_OR", "LBRACKET", "RPRACKET", 
                             "LBRACE", "RBRACE", "LPAREN", "RPAREN", "DOT", 
                             "COMMA", "MINUS", "EXCLAM", "QUESTIONMARK", 
                             "COLON", "PLUS", "STAR", "SLASH", "PERCENT", 
                             "TRUE", "FALSE", "NULL", "WHITESPACE", "COMMENT", 
                             "NUM_FLOAT", "NUM_INT", "NUM_UINT", "STRING", 
                             "BYTES", "IDENTIFIER" ];
    static ruleNames = [ "start", "expr", "conditionalOr", "conditionalAnd", 
                         "relation", "calc", "unary", "member", "primary", 
                         "exprList", "fieldInitializerList", "mapInitializerList", 
                         "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CELParser.ruleNames;
        this.literalNames = CELParser.literalNames;
        this.symbolicNames = CELParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.relation_sempred(localctx, predIndex);
    	case 5:
    	    		return this.calc_sempred(localctx, predIndex);
    	case 7:
    	    		return this.member_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    relation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    calc_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    member_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CELParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        localctx.e = this.expr();
	        this.state = 27;
	        this.match(CELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CELParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        localctx.e = this.conditionalOr();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 30;
	            localctx.op = this.match(CELParser.QUESTIONMARK);
	            this.state = 31;
	            localctx.e1 = this.conditionalOr();
	            this.state = 32;
	            this.match(CELParser.COLON);
	            this.state = 33;
	            localctx.e2 = this.expr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalOr() {
	    let localctx = new ConditionalOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CELParser.RULE_conditionalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        localctx.e = this.conditionalAnd();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 38;
	            localctx.s9 = this.match(CELParser.LOGICAL_OR);
	            localctx.ops.push(localctx.s9);
	            this.state = 39;
	            localctx._conditionalAnd = this.conditionalAnd();
	            localctx.e1.push(localctx._conditionalAnd);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalAnd() {
	    let localctx = new ConditionalAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CELParser.RULE_conditionalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        localctx.e = this.relation(0);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 46;
	            localctx.s8 = this.match(CELParser.LOGICAL_AND);
	            localctx.ops.push(localctx.s8);
	            this.state = 47;
	            localctx._relation = this.relation(0);
	            localctx.e1.push(localctx._relation);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	relation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RelationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, CELParser.RULE_relation, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new RelationCalcContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 54;
	        this.calc(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new RelationOpContext(this, new RelationContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_relation);
	                this.state = 56;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 57;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 254) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 58;
	                this.relation(2); 
	            }
	            this.state = 63;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	calc(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CalcContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, CELParser.RULE_calc, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new CalcUnaryContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 65;
	        this.unary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 73;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcMulDivContext(this, new CalcContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 68;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 58720256) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.calc(3);
	                    break;

	                case 2:
	                    localctx = new CalcAddSubContext(this, new CalcContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 71;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===22)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 72;
	                    this.calc(2);
	                    break;

	                } 
	            }
	            this.state = 77;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CELParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MemberExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.member(0);
	            break;

	        case 2:
	            localctx = new LogicalNotContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 79;
	                localctx.s19 = this.match(CELParser.EXCLAM);
	                localctx.ops.push(localctx.s19);
	                this.state = 82; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===19);
	            this.state = 84;
	            this.member(0);
	            break;

	        case 3:
	            localctx = new NegateContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 85;
	            		localctx.s18 = this.match(CELParser.MINUS);
	            		localctx.ops.push(localctx.s18);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 88; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 90;
	            this.member(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	member(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MemberContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, CELParser.RULE_member, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PrimaryExprContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 94;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 120;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new SelectOrCallContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 97;
	                    localctx.op = this.match(CELParser.DOT);
	                    this.state = 98;
	                    localctx.id = this.match(CELParser.IDENTIFIER);
	                    this.state = 104;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                    if(la_===1) {
	                        this.state = 99;
	                        localctx.open = this.match(CELParser.LPAREN);
	                        this.state = 101;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        if(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
	                            this.state = 100;
	                            localctx.args = this.exprList();
	                        }

	                        this.state = 103;
	                        this.match(CELParser.RPAREN);

	                    }
	                    break;

	                case 2:
	                    localctx = new IndexContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 107;
	                    localctx.op = this.match(CELParser.LBRACKET);
	                    this.state = 108;
	                    localctx.index = this.expr();
	                    this.state = 109;
	                    this.match(CELParser.RPRACKET);
	                    break;

	                case 3:
	                    localctx = new CreateMessageContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 112;
	                    localctx.op = this.match(CELParser.LBRACE);
	                    this.state = 114;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===36) {
	                        this.state = 113;
	                        localctx.entries = this.fieldInitializerList();
	                    }

	                    this.state = 117;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===17) {
	                        this.state = 116;
	                        this.match(CELParser.COMMA);
	                    }

	                    this.state = 119;
	                    this.match(CELParser.RBRACE);
	                    break;

	                } 
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CELParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 36:
	            localctx = new IdentOrGlobalCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 125;
	                localctx.leadingDot = this.match(CELParser.DOT);
	            }

	            this.state = 128;
	            localctx.id = this.match(CELParser.IDENTIFIER);
	            this.state = 134;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 129;
	                localctx.op = this.match(CELParser.LPAREN);
	                this.state = 131;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
	                    this.state = 130;
	                    localctx.args = this.exprList();
	                }

	                this.state = 133;
	                this.match(CELParser.RPAREN);

	            }
	            break;
	        case 14:
	            localctx = new NestedContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.match(CELParser.LPAREN);
	            this.state = 137;
	            localctx.e = this.expr();
	            this.state = 138;
	            this.match(CELParser.RPAREN);
	            break;
	        case 10:
	            localctx = new CreateListContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            localctx.op = this.match(CELParser.LBRACKET);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
	                this.state = 141;
	                localctx.elems = this.exprList();
	            }

	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 144;
	                this.match(CELParser.COMMA);
	            }

	            this.state = 147;
	            this.match(CELParser.RPRACKET);
	            break;
	        case 12:
	            localctx = new CreateStructContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 148;
	            localctx.op = this.match(CELParser.LBRACE);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
	                this.state = 149;
	                localctx.entries = this.mapInitializerList();
	            }

	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 152;
	                this.match(CELParser.COMMA);
	            }

	            this.state = 155;
	            this.match(CELParser.RBRACE);
	            break;
	        case 18:
	        case 26:
	        case 27:
	        case 28:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	            localctx = new ConstantLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 156;
	            this.literal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CELParser.RULE_exprList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        localctx._expr = this.expr();
	        localctx.e.push(localctx._expr);
	        this.state = 164;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 160;
	                this.match(CELParser.COMMA);
	                this.state = 161;
	                localctx._expr = this.expr();
	                localctx.e.push(localctx._expr); 
	            }
	            this.state = 166;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldInitializerList() {
	    let localctx = new FieldInitializerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CELParser.RULE_fieldInitializerList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
	        localctx.fields.push(localctx._IDENTIFIER);
	        this.state = 168;
	        localctx.s21 = this.match(CELParser.COLON);
	        localctx.cols.push(localctx.s21);
	        this.state = 169;
	        localctx._expr = this.expr();
	        localctx.values.push(localctx._expr);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 170;
	                this.match(CELParser.COMMA);
	                this.state = 171;
	                localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
	                localctx.fields.push(localctx._IDENTIFIER);
	                this.state = 172;
	                localctx.s21 = this.match(CELParser.COLON);
	                localctx.cols.push(localctx.s21);
	                this.state = 173;
	                localctx._expr = this.expr();
	                localctx.values.push(localctx._expr); 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapInitializerList() {
	    let localctx = new MapInitializerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CELParser.RULE_mapInitializerList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        localctx._expr = this.expr();
	        localctx.keys.push(localctx._expr);
	        this.state = 180;
	        localctx.s21 = this.match(CELParser.COLON);
	        localctx.cols.push(localctx.s21);
	        this.state = 181;
	        localctx._expr = this.expr();
	        localctx.values.push(localctx._expr);
	        this.state = 189;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 182;
	                this.match(CELParser.COMMA);
	                this.state = 183;
	                localctx._expr = this.expr();
	                localctx.keys.push(localctx._expr);
	                this.state = 184;
	                localctx.s21 = this.match(CELParser.COLON);
	                localctx.cols.push(localctx.s21);
	                this.state = 185;
	                localctx._expr = this.expr();
	                localctx.values.push(localctx._expr); 
	            }
	            this.state = 191;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CELParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 192;
	                localctx.sign = this.match(CELParser.MINUS);
	            }

	            this.state = 195;
	            localctx.tok = this.match(CELParser.NUM_INT);
	            break;

	        case 2:
	            localctx = new UintContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            localctx.tok = this.match(CELParser.NUM_UINT);
	            break;

	        case 3:
	            localctx = new DoubleContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 197;
	                localctx.sign = this.match(CELParser.MINUS);
	            }

	            this.state = 200;
	            localctx.tok = this.match(CELParser.NUM_FLOAT);
	            break;

	        case 4:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 201;
	            localctx.tok = this.match(CELParser.STRING);
	            break;

	        case 5:
	            localctx = new BytesContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 202;
	            localctx.tok = this.match(CELParser.BYTES);
	            break;

	        case 6:
	            localctx = new BoolTrueContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 203;
	            localctx.tok = this.match(CELParser.TRUE);
	            break;

	        case 7:
	            localctx = new BoolFalseContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 204;
	            localctx.tok = this.match(CELParser.FALSE);
	            break;

	        case 8:
	            localctx = new NullContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 205;
	            localctx.tok = this.match(CELParser.NULL);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CELParser.EOF = antlr4.Token.EOF;
CELParser.EQUALS = 1;
CELParser.NOT_EQUALS = 2;
CELParser.IN = 3;
CELParser.LESS = 4;
CELParser.LESS_EQUALS = 5;
CELParser.GREATER_EQUALS = 6;
CELParser.GREATER = 7;
CELParser.LOGICAL_AND = 8;
CELParser.LOGICAL_OR = 9;
CELParser.LBRACKET = 10;
CELParser.RPRACKET = 11;
CELParser.LBRACE = 12;
CELParser.RBRACE = 13;
CELParser.LPAREN = 14;
CELParser.RPAREN = 15;
CELParser.DOT = 16;
CELParser.COMMA = 17;
CELParser.MINUS = 18;
CELParser.EXCLAM = 19;
CELParser.QUESTIONMARK = 20;
CELParser.COLON = 21;
CELParser.PLUS = 22;
CELParser.STAR = 23;
CELParser.SLASH = 24;
CELParser.PERCENT = 25;
CELParser.TRUE = 26;
CELParser.FALSE = 27;
CELParser.NULL = 28;
CELParser.WHITESPACE = 29;
CELParser.COMMENT = 30;
CELParser.NUM_FLOAT = 31;
CELParser.NUM_INT = 32;
CELParser.NUM_UINT = 33;
CELParser.STRING = 34;
CELParser.BYTES = 35;
CELParser.IDENTIFIER = 36;

CELParser.RULE_start = 0;
CELParser.RULE_expr = 1;
CELParser.RULE_conditionalOr = 2;
CELParser.RULE_conditionalAnd = 3;
CELParser.RULE_relation = 4;
CELParser.RULE_calc = 5;
CELParser.RULE_unary = 6;
CELParser.RULE_member = 7;
CELParser.RULE_primary = 8;
CELParser.RULE_exprList = 9;
CELParser.RULE_fieldInitializerList = 10;
CELParser.RULE_mapInitializerList = 11;
CELParser.RULE_literal = 12;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_start;
        this.e = null;
    }

	EOF() {
	    return this.getToken(CELParser.EOF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_expr;
        this.e = null;
        this.op = null;
        this.e1 = null;
        this.e2 = null;
    }

	conditionalOr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalOrContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalOrContext,i);
	    }
	};

	COLON() {
	    return this.getToken(CELParser.COLON, 0);
	};

	QUESTIONMARK() {
	    return this.getToken(CELParser.QUESTIONMARK, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_conditionalOr;
        this.e = null;
        this.s9 = null;
        this.ops = [];
        this._conditionalAnd = null;
        this.e1 = [];
    }

	conditionalAnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalAndContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalAndContext,i);
	    }
	};

	LOGICAL_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.LOGICAL_OR);
	    } else {
	        return this.getToken(CELParser.LOGICAL_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConditionalOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConditionalOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConditionalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_conditionalAnd;
        this.e = null;
        this.s8 = null;
        this.ops = [];
        this._relation = null;
        this.e1 = [];
    }

	relation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationContext);
	    } else {
	        return this.getTypedRuleContext(RelationContext,i);
	    }
	};

	LOGICAL_AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.LOGICAL_AND);
	    } else {
	        return this.getToken(CELParser.LOGICAL_AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConditionalAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConditionalAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConditionalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_relation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RelationOpContext extends RelationContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	relation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationContext);
	    } else {
	        return this.getTypedRuleContext(RelationContext,i);
	    }
	};

	LESS() {
	    return this.getToken(CELParser.LESS, 0);
	};

	LESS_EQUALS() {
	    return this.getToken(CELParser.LESS_EQUALS, 0);
	};

	GREATER_EQUALS() {
	    return this.getToken(CELParser.GREATER_EQUALS, 0);
	};

	GREATER() {
	    return this.getToken(CELParser.GREATER, 0);
	};

	EQUALS() {
	    return this.getToken(CELParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(CELParser.NOT_EQUALS, 0);
	};

	IN() {
	    return this.getToken(CELParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterRelationOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitRelationOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitRelationOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.RelationOpContext = RelationOpContext;

class RelationCalcContext extends RelationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	calc() {
	    return this.getTypedRuleContext(CalcContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterRelationCalc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitRelationCalc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitRelationCalc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.RelationCalcContext = RelationCalcContext;

class CalcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_calc;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CalcMulDivContext extends CalcContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	calc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CalcContext);
	    } else {
	        return this.getTypedRuleContext(CalcContext,i);
	    }
	};

	STAR() {
	    return this.getToken(CELParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(CELParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(CELParser.PERCENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCalcMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCalcMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCalcMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CalcMulDivContext = CalcMulDivContext;

class CalcUnaryContext extends CalcContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCalcUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCalcUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCalcUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CalcUnaryContext = CalcUnaryContext;

class CalcAddSubContext extends CalcContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	calc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CalcContext);
	    } else {
	        return this.getTypedRuleContext(CalcContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CELParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCalcAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCalcAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCalcAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CalcAddSubContext = CalcAddSubContext;

class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_unary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalNotContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.s19 = null;;
        this.ops = [];;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	EXCLAM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.EXCLAM);
	    } else {
	        return this.getToken(CELParser.EXCLAM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterLogicalNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitLogicalNot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitLogicalNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.LogicalNotContext = LogicalNotContext;

class MemberExprContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterMemberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitMemberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitMemberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.MemberExprContext = MemberExprContext;

class NegateContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.s18 = null;;
        this.ops = [];;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.MINUS);
	    } else {
	        return this.getToken(CELParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNegate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNegate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNegate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NegateContext = NegateContext;

class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_member;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectOrCallContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        this.id = null;;
        this.open = null;;
        this.args = null;;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	DOT() {
	    return this.getToken(CELParser.DOT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CELParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterSelectOrCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitSelectOrCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitSelectOrCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.SelectOrCallContext = SelectOrCallContext;

class PrimaryExprContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterPrimaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitPrimaryExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitPrimaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.PrimaryExprContext = PrimaryExprContext;

class IndexContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        this.index = null;;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	RPRACKET() {
	    return this.getToken(CELParser.RPRACKET, 0);
	};

	LBRACKET() {
	    return this.getToken(CELParser.LBRACKET, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IndexContext = IndexContext;

class CreateMessageContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        this.entries = null;;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	RBRACE() {
	    return this.getToken(CELParser.RBRACE, 0);
	};

	LBRACE() {
	    return this.getToken(CELParser.LBRACE, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	fieldInitializerList() {
	    return this.getTypedRuleContext(FieldInitializerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateMessage(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateMessage(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateMessageContext = CreateMessageContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_primary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CreateListContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        this.elems = null;;
        super.copyFrom(ctx);
    }

	RPRACKET() {
	    return this.getToken(CELParser.RPRACKET, 0);
	};

	LBRACKET() {
	    return this.getToken(CELParser.LBRACKET, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateListContext = CreateListContext;

class CreateStructContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        this.entries = null;;
        super.copyFrom(ctx);
    }

	RBRACE() {
	    return this.getToken(CELParser.RBRACE, 0);
	};

	LBRACE() {
	    return this.getToken(CELParser.LBRACE, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	mapInitializerList() {
	    return this.getTypedRuleContext(MapInitializerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateStruct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateStructContext = CreateStructContext;

class ConstantLiteralContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConstantLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConstantLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConstantLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.ConstantLiteralContext = ConstantLiteralContext;

class NestedContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.e = null;;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNested(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNested(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNested(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NestedContext = NestedContext;

class IdentOrGlobalCallContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.leadingDot = null;;
        this.id = null;;
        this.op = null;;
        this.args = null;;
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(CELParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	DOT() {
	    return this.getToken(CELParser.DOT, 0);
	};

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterIdentOrGlobalCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitIdentOrGlobalCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitIdentOrGlobalCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IdentOrGlobalCallContext = IdentOrGlobalCallContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_exprList;
        this._expr = null;
        this.e = [];
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldInitializerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_fieldInitializerList;
        this._IDENTIFIER = null;
        this.fields = [];
        this.s21 = null;
        this.cols = [];
        this._expr = null;
        this.values = [];
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.IDENTIFIER);
	    } else {
	        return this.getToken(CELParser.IDENTIFIER, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COLON);
	    } else {
	        return this.getToken(CELParser.COLON, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterFieldInitializerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitFieldInitializerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitFieldInitializerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MapInitializerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_mapInitializerList;
        this._expr = null;
        this.keys = [];
        this.s21 = null;
        this.cols = [];
        this.values = [];
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COLON);
	    } else {
	        return this.getToken(CELParser.COLON, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterMapInitializerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitMapInitializerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitMapInitializerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_literal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BytesContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	BYTES() {
	    return this.getToken(CELParser.BYTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBytes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBytes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBytes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BytesContext = BytesContext;

class UintContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	NUM_UINT() {
	    return this.getToken(CELParser.NUM_UINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterUint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitUint(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitUint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.UintContext = UintContext;

class NullContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(CELParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNull(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNull(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NullContext = NullContext;

class BoolFalseContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(CELParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBoolFalse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBoolFalse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBoolFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BoolFalseContext = BoolFalseContext;

class StringContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CELParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.StringContext = StringContext;

class DoubleContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.sign = null;;
        this.tok = null;;
        super.copyFrom(ctx);
    }

	NUM_FLOAT() {
	    return this.getToken(CELParser.NUM_FLOAT, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterDouble(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitDouble(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitDouble(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.DoubleContext = DoubleContext;

class BoolTrueContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null;;
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(CELParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBoolTrue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBoolTrue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBoolTrue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BoolTrueContext = BoolTrueContext;

class IntContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.sign = null;;
        this.tok = null;;
        super.copyFrom(ctx);
    }

	NUM_INT() {
	    return this.getToken(CELParser.NUM_INT, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IntContext = IntContext;


CELParser.StartContext = StartContext; 
CELParser.ExprContext = ExprContext; 
CELParser.ConditionalOrContext = ConditionalOrContext; 
CELParser.ConditionalAndContext = ConditionalAndContext; 
CELParser.RelationContext = RelationContext; 
CELParser.CalcContext = CalcContext; 
CELParser.UnaryContext = UnaryContext; 
CELParser.MemberContext = MemberContext; 
CELParser.PrimaryContext = PrimaryContext; 
CELParser.ExprListContext = ExprListContext; 
CELParser.FieldInitializerListContext = FieldInitializerListContext; 
CELParser.MapInitializerListContext = MapInitializerListContext; 
CELParser.LiteralContext = LiteralContext; 
