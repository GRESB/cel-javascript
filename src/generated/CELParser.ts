// Generated from src/grammar/CEL.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CELListener from "./CELListener.js";
import CELVisitor from "./CELVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CELParser extends Parser {
	public static readonly EQUALS = 1;
	public static readonly NOT_EQUALS = 2;
	public static readonly IN = 3;
	public static readonly LESS = 4;
	public static readonly LESS_EQUALS = 5;
	public static readonly GREATER_EQUALS = 6;
	public static readonly GREATER = 7;
	public static readonly LOGICAL_AND = 8;
	public static readonly LOGICAL_OR = 9;
	public static readonly LBRACKET = 10;
	public static readonly RPRACKET = 11;
	public static readonly LBRACE = 12;
	public static readonly RBRACE = 13;
	public static readonly LPAREN = 14;
	public static readonly RPAREN = 15;
	public static readonly DOT = 16;
	public static readonly COMMA = 17;
	public static readonly MINUS = 18;
	public static readonly EXCLAM = 19;
	public static readonly QUESTIONMARK = 20;
	public static readonly COLON = 21;
	public static readonly PLUS = 22;
	public static readonly STAR = 23;
	public static readonly SLASH = 24;
	public static readonly PERCENT = 25;
	public static readonly TRUE = 26;
	public static readonly FALSE = 27;
	public static readonly NULL = 28;
	public static readonly WHITESPACE = 29;
	public static readonly COMMENT = 30;
	public static readonly NUM_FLOAT = 31;
	public static readonly NUM_INT = 32;
	public static readonly NUM_UINT = 33;
	public static readonly STRING = 34;
	public static readonly BYTES = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_conditionalOr = 2;
	public static readonly RULE_conditionalAnd = 3;
	public static readonly RULE_relation = 4;
	public static readonly RULE_calc = 5;
	public static readonly RULE_unary = 6;
	public static readonly RULE_member = 7;
	public static readonly RULE_primary = 8;
	public static readonly RULE_exprList = 9;
	public static readonly RULE_fieldInitializerList = 10;
	public static readonly RULE_mapInitializerList = 11;
	public static readonly RULE_literal = 12;
	public static readonly literalNames: (string | null)[] = [ null, "'=='", 
                                                            "'!='", "'in'", 
                                                            "'<'", "'<='", 
                                                            "'>='", "'>'", 
                                                            "'&&'", "'||'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "'.'", "','", 
                                                            "'-'", "'!'", 
                                                            "'?'", "':'", 
                                                            "'+'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'true'", "'false'", 
                                                            "'null'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "EQUALS", 
                                                             "NOT_EQUALS", 
                                                             "IN", "LESS", 
                                                             "LESS_EQUALS", 
                                                             "GREATER_EQUALS", 
                                                             "GREATER", 
                                                             "LOGICAL_AND", 
                                                             "LOGICAL_OR", 
                                                             "LBRACKET", 
                                                             "RPRACKET", 
                                                             "LBRACE", "RBRACE", 
                                                             "LPAREN", "RPAREN", 
                                                             "DOT", "COMMA", 
                                                             "MINUS", "EXCLAM", 
                                                             "QUESTIONMARK", 
                                                             "COLON", "PLUS", 
                                                             "STAR", "SLASH", 
                                                             "PERCENT", 
                                                             "TRUE", "FALSE", 
                                                             "NULL", "WHITESPACE", 
                                                             "COMMENT", 
                                                             "NUM_FLOAT", 
                                                             "NUM_INT", 
                                                             "NUM_UINT", 
                                                             "STRING", "BYTES", 
                                                             "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expr", "conditionalOr", "conditionalAnd", "relation", "calc", 
		"unary", "member", "primary", "exprList", "fieldInitializerList", "mapInitializerList", 
		"literal",
	];
	public get grammarFileName(): string { return "CEL.g4"; }
	public get literalNames(): (string | null)[] { return CELParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CELParser.symbolicNames; }
	public get ruleNames(): string[] { return CELParser.ruleNames; }
	public get serializedATN(): number[] { return CELParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CELParser._ATN, CELParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CELParser.RULE_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			localctx._e = this.expr();
			this.state = 27;
			this.match(CELParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CELParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			localctx._e = this.conditionalOr();
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 30;
				localctx._op = this.match(CELParser.QUESTIONMARK);
				this.state = 31;
				localctx._e1 = this.conditionalOr();
				this.state = 32;
				this.match(CELParser.COLON);
				this.state = 33;
				localctx._e2 = this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalOr(): ConditionalOrContext {
		let localctx: ConditionalOrContext = new ConditionalOrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CELParser.RULE_conditionalOr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			localctx._e = this.conditionalAnd();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 38;
				localctx._s9 = this.match(CELParser.LOGICAL_OR);
				localctx._ops.push(localctx._s9);
				this.state = 39;
				localctx._conditionalAnd = this.conditionalAnd();
				localctx._e1.push(localctx._conditionalAnd);
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalAnd(): ConditionalAndContext {
		let localctx: ConditionalAndContext = new ConditionalAndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CELParser.RULE_conditionalAnd);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			localctx._e = this.relation(0);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 46;
				localctx._s8 = this.match(CELParser.LOGICAL_AND);
				localctx._ops.push(localctx._s8);
				this.state = 47;
				localctx._relation = this.relation(0);
				localctx._e1.push(localctx._relation);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationContext = new RelationContext(this, this._ctx, _parentState);
		let _prevctx: RelationContext = localctx;
		let _startState: number = 8;
		this.enterRecursionRule(localctx, 8, CELParser.RULE_relation, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RelationCalcContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 54;
			this.calc(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new RelationOpContext(this, new RelationContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_relation);
					this.state = 56;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 57;
					(localctx as RelationOpContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 254) !== 0))) {
					    (localctx as RelationOpContext)._op = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 58;
					this.relation(2);
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public calc(): CalcContext;
	public calc(_p: number): CalcContext;
	// @RuleVersion(0)
	public calc(_p?: number): CalcContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: CalcContext = new CalcContext(this, this._ctx, _parentState);
		let _prevctx: CalcContext = localctx;
		let _startState: number = 10;
		this.enterRecursionRule(localctx, 10, CELParser.RULE_calc, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new CalcUnaryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 65;
			this.unary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 73;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new CalcMulDivContext(this, new CalcContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
						this.state = 67;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 68;
						(localctx as CalcMulDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0))) {
						    (localctx as CalcMulDivContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 69;
						this.calc(3);
						}
						break;
					case 2:
						{
						localctx = new CalcAddSubContext(this, new CalcContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
						this.state = 70;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 71;
						(localctx as CalcAddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===18 || _la===22)) {
						    (localctx as CalcAddSubContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 72;
						this.calc(2);
						}
						break;
					}
					}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unary(): UnaryContext {
		let localctx: UnaryContext = new UnaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CELParser.RULE_unary);
		let _la: number;
		try {
			let _alt: number;
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				localctx = new MemberExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 78;
				this.member(0);
				}
				break;
			case 2:
				localctx = new LogicalNotContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 79;
					(localctx as LogicalNotContext)._s19 = this.match(CELParser.EXCLAM);
					(localctx as LogicalNotContext)._ops.push((localctx as LogicalNotContext)._s19);
					}
					}
					this.state = 82;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===19);
				this.state = 84;
				this.member(0);
				}
				break;
			case 3:
				localctx = new NegateContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 86;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 85;
						(localctx as NegateContext)._s18 = this.match(CELParser.MINUS);
						(localctx as NegateContext)._ops.push((localctx as NegateContext)._s18);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 88;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 90;
				this.member(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public member(): MemberContext;
	public member(_p: number): MemberContext;
	// @RuleVersion(0)
	public member(_p?: number): MemberContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MemberContext = new MemberContext(this, this._ctx, _parentState);
		let _prevctx: MemberContext = localctx;
		let _startState: number = 14;
		this.enterRecursionRule(localctx, 14, CELParser.RULE_member, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PrimaryExprContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 94;
			this.primary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 122;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 120;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new SelectOrCallContext(this, new MemberContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
						this.state = 96;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 97;
						(localctx as SelectOrCallContext)._op = this.match(CELParser.DOT);
						this.state = 98;
						(localctx as SelectOrCallContext)._id = this.match(CELParser.IDENTIFIER);
						this.state = 104;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
						case 1:
							{
							this.state = 99;
							(localctx as SelectOrCallContext)._open = this.match(CELParser.LPAREN);
							this.state = 101;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
								{
								this.state = 100;
								(localctx as SelectOrCallContext)._args = this.exprList();
								}
							}

							this.state = 103;
							this.match(CELParser.RPAREN);
							}
							break;
						}
						}
						break;
					case 2:
						{
						localctx = new IndexContext(this, new MemberContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
						this.state = 106;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 107;
						(localctx as IndexContext)._op = this.match(CELParser.LBRACKET);
						this.state = 108;
						(localctx as IndexContext)._index = this.expr();
						this.state = 109;
						this.match(CELParser.RPRACKET);
						}
						break;
					case 3:
						{
						localctx = new CreateMessageContext(this, new MemberContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
						this.state = 111;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 112;
						(localctx as CreateMessageContext)._op = this.match(CELParser.LBRACE);
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===36) {
							{
							this.state = 113;
							(localctx as CreateMessageContext)._entries = this.fieldInitializerList();
							}
						}

						this.state = 117;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===17) {
							{
							this.state = 116;
							this.match(CELParser.COMMA);
							}
						}

						this.state = 119;
						this.match(CELParser.RBRACE);
						}
						break;
					}
					}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CELParser.RULE_primary);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 36:
				localctx = new IdentOrGlobalCallContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 125;
					(localctx as IdentOrGlobalCallContext)._leadingDot = this.match(CELParser.DOT);
					}
				}

				this.state = 128;
				(localctx as IdentOrGlobalCallContext)._id = this.match(CELParser.IDENTIFIER);
				this.state = 134;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					(localctx as IdentOrGlobalCallContext)._op = this.match(CELParser.LPAREN);
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
						{
						this.state = 130;
						(localctx as IdentOrGlobalCallContext)._args = this.exprList();
						}
					}

					this.state = 133;
					this.match(CELParser.RPAREN);
					}
					break;
				}
				}
				break;
			case 14:
				localctx = new NestedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 136;
				this.match(CELParser.LPAREN);
				this.state = 137;
				(localctx as NestedContext)._e = this.expr();
				this.state = 138;
				this.match(CELParser.RPAREN);
				}
				break;
			case 10:
				localctx = new CreateListContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 140;
				(localctx as CreateListContext)._op = this.match(CELParser.LBRACKET);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
					{
					this.state = 141;
					(localctx as CreateListContext)._elems = this.exprList();
					}
				}

				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 144;
					this.match(CELParser.COMMA);
					}
				}

				this.state = 147;
				this.match(CELParser.RPRACKET);
				}
				break;
			case 12:
				localctx = new CreateStructContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 148;
				(localctx as CreateStructContext)._op = this.match(CELParser.LBRACE);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 132580181) !== 0)) {
					{
					this.state = 149;
					(localctx as CreateStructContext)._entries = this.mapInitializerList();
					}
				}

				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 152;
					this.match(CELParser.COMMA);
					}
				}

				this.state = 155;
				this.match(CELParser.RBRACE);
				}
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
				{
				this.state = 156;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let localctx: ExprListContext = new ExprListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CELParser.RULE_exprList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			localctx._expr = this.expr();
			localctx._e.push(localctx._expr);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 160;
					this.match(CELParser.COMMA);
					this.state = 161;
					localctx._expr = this.expr();
					localctx._e.push(localctx._expr);
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldInitializerList(): FieldInitializerListContext {
		let localctx: FieldInitializerListContext = new FieldInitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CELParser.RULE_fieldInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
			localctx._fields.push(localctx._IDENTIFIER);
			this.state = 168;
			localctx._s21 = this.match(CELParser.COLON);
			localctx._cols.push(localctx._s21);
			this.state = 169;
			localctx._expr = this.expr();
			localctx._values.push(localctx._expr);
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(CELParser.COMMA);
					this.state = 171;
					localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
					localctx._fields.push(localctx._IDENTIFIER);
					this.state = 172;
					localctx._s21 = this.match(CELParser.COLON);
					localctx._cols.push(localctx._s21);
					this.state = 173;
					localctx._expr = this.expr();
					localctx._values.push(localctx._expr);
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapInitializerList(): MapInitializerListContext {
		let localctx: MapInitializerListContext = new MapInitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CELParser.RULE_mapInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			localctx._expr = this.expr();
			localctx._keys.push(localctx._expr);
			this.state = 180;
			localctx._s21 = this.match(CELParser.COLON);
			localctx._cols.push(localctx._s21);
			this.state = 181;
			localctx._expr = this.expr();
			localctx._values.push(localctx._expr);
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 182;
					this.match(CELParser.COMMA);
					this.state = 183;
					localctx._expr = this.expr();
					localctx._keys.push(localctx._expr);
					this.state = 184;
					localctx._s21 = this.match(CELParser.COLON);
					localctx._cols.push(localctx._s21);
					this.state = 185;
					localctx._expr = this.expr();
					localctx._values.push(localctx._expr);
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CELParser.RULE_literal);
		let _la: number;
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				localctx = new IntContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 192;
					(localctx as IntContext)._sign = this.match(CELParser.MINUS);
					}
				}

				this.state = 195;
				(localctx as IntContext)._tok = this.match(CELParser.NUM_INT);
				}
				break;
			case 2:
				localctx = new UintContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 196;
				(localctx as UintContext)._tok = this.match(CELParser.NUM_UINT);
				}
				break;
			case 3:
				localctx = new DoubleContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 197;
					(localctx as DoubleContext)._sign = this.match(CELParser.MINUS);
					}
				}

				this.state = 200;
				(localctx as DoubleContext)._tok = this.match(CELParser.NUM_FLOAT);
				}
				break;
			case 4:
				localctx = new StringContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 201;
				(localctx as StringContext)._tok = this.match(CELParser.STRING);
				}
				break;
			case 5:
				localctx = new BytesContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 202;
				(localctx as BytesContext)._tok = this.match(CELParser.BYTES);
				}
				break;
			case 6:
				localctx = new BoolTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 203;
				(localctx as BoolTrueContext)._tok = this.match(CELParser.TRUE);
				}
				break;
			case 7:
				localctx = new BoolFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 204;
				(localctx as BoolFalseContext)._tok = this.match(CELParser.FALSE);
				}
				break;
			case 8:
				localctx = new NullContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 205;
				(localctx as NullContext)._tok = this.match(CELParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.relation_sempred(localctx as RelationContext, predIndex);
		case 5:
			return this.calc_sempred(localctx as CalcContext, predIndex);
		case 7:
			return this.member_sempred(localctx as MemberContext, predIndex);
		}
		return true;
	}
	private relation_sempred(localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private calc_sempred(localctx: CalcContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private member_sempred(localctx: MemberContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,36,209,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,36,
	8,1,1,2,1,2,1,2,5,2,41,8,2,10,2,12,2,44,9,2,1,3,1,3,1,3,5,3,49,8,3,10,3,
	12,3,52,9,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,60,8,4,10,4,12,4,63,9,4,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,74,8,5,10,5,12,5,77,9,5,1,6,1,6,4,6,81,
	8,6,11,6,12,6,82,1,6,1,6,4,6,87,8,6,11,6,12,6,88,1,6,3,6,92,8,6,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,102,8,7,1,7,3,7,105,8,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,115,8,7,1,7,3,7,118,8,7,1,7,5,7,121,8,7,10,7,12,7,124,9,
	7,1,8,3,8,127,8,8,1,8,1,8,1,8,3,8,132,8,8,1,8,3,8,135,8,8,1,8,1,8,1,8,1,
	8,1,8,1,8,3,8,143,8,8,1,8,3,8,146,8,8,1,8,1,8,1,8,3,8,151,8,8,1,8,3,8,154,
	8,8,1,8,1,8,3,8,158,8,8,1,9,1,9,1,9,5,9,163,8,9,10,9,12,9,166,9,9,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,5,10,175,8,10,10,10,12,10,178,9,10,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,188,8,11,10,11,12,11,191,9,11,1,12,
	3,12,194,8,12,1,12,1,12,1,12,3,12,199,8,12,1,12,1,12,1,12,1,12,1,12,1,12,
	3,12,207,8,12,1,12,0,3,8,10,14,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,3,
	1,0,1,7,1,0,23,25,2,0,18,18,22,22,235,0,26,1,0,0,0,2,29,1,0,0,0,4,37,1,
	0,0,0,6,45,1,0,0,0,8,53,1,0,0,0,10,64,1,0,0,0,12,91,1,0,0,0,14,93,1,0,0,
	0,16,157,1,0,0,0,18,159,1,0,0,0,20,167,1,0,0,0,22,179,1,0,0,0,24,206,1,
	0,0,0,26,27,3,2,1,0,27,28,5,0,0,1,28,1,1,0,0,0,29,35,3,4,2,0,30,31,5,20,
	0,0,31,32,3,4,2,0,32,33,5,21,0,0,33,34,3,2,1,0,34,36,1,0,0,0,35,30,1,0,
	0,0,35,36,1,0,0,0,36,3,1,0,0,0,37,42,3,6,3,0,38,39,5,9,0,0,39,41,3,6,3,
	0,40,38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,
	44,42,1,0,0,0,45,50,3,8,4,0,46,47,5,8,0,0,47,49,3,8,4,0,48,46,1,0,0,0,49,
	52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,7,1,0,0,0,52,50,1,0,0,0,53,54,
	6,4,-1,0,54,55,3,10,5,0,55,61,1,0,0,0,56,57,10,1,0,0,57,58,7,0,0,0,58,60,
	3,8,4,2,59,56,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,9,1,
	0,0,0,63,61,1,0,0,0,64,65,6,5,-1,0,65,66,3,12,6,0,66,75,1,0,0,0,67,68,10,
	2,0,0,68,69,7,1,0,0,69,74,3,10,5,3,70,71,10,1,0,0,71,72,7,2,0,0,72,74,3,
	10,5,2,73,67,1,0,0,0,73,70,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,
	0,0,0,76,11,1,0,0,0,77,75,1,0,0,0,78,92,3,14,7,0,79,81,5,19,0,0,80,79,1,
	0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,92,3,14,
	7,0,85,87,5,18,0,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,88,89,1,0,
	0,0,89,90,1,0,0,0,90,92,3,14,7,0,91,78,1,0,0,0,91,80,1,0,0,0,91,86,1,0,
	0,0,92,13,1,0,0,0,93,94,6,7,-1,0,94,95,3,16,8,0,95,122,1,0,0,0,96,97,10,
	3,0,0,97,98,5,16,0,0,98,104,5,36,0,0,99,101,5,14,0,0,100,102,3,18,9,0,101,
	100,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,105,5,15,0,0,104,99,1,0,
	0,0,104,105,1,0,0,0,105,121,1,0,0,0,106,107,10,2,0,0,107,108,5,10,0,0,108,
	109,3,2,1,0,109,110,5,11,0,0,110,121,1,0,0,0,111,112,10,1,0,0,112,114,5,
	12,0,0,113,115,3,20,10,0,114,113,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,
	0,116,118,5,17,0,0,117,116,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,
	121,5,13,0,0,120,96,1,0,0,0,120,106,1,0,0,0,120,111,1,0,0,0,121,124,1,0,
	0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,15,1,0,0,0,124,122,1,0,0,0,125,
	127,5,16,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,134,5,
	36,0,0,129,131,5,14,0,0,130,132,3,18,9,0,131,130,1,0,0,0,131,132,1,0,0,
	0,132,133,1,0,0,0,133,135,5,15,0,0,134,129,1,0,0,0,134,135,1,0,0,0,135,
	158,1,0,0,0,136,137,5,14,0,0,137,138,3,2,1,0,138,139,5,15,0,0,139,158,1,
	0,0,0,140,142,5,10,0,0,141,143,3,18,9,0,142,141,1,0,0,0,142,143,1,0,0,0,
	143,145,1,0,0,0,144,146,5,17,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,
	1,0,0,0,147,158,5,11,0,0,148,150,5,12,0,0,149,151,3,22,11,0,150,149,1,0,
	0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,154,5,17,0,0,153,152,1,0,0,0,153,
	154,1,0,0,0,154,155,1,0,0,0,155,158,5,13,0,0,156,158,3,24,12,0,157,126,
	1,0,0,0,157,136,1,0,0,0,157,140,1,0,0,0,157,148,1,0,0,0,157,156,1,0,0,0,
	158,17,1,0,0,0,159,164,3,2,1,0,160,161,5,17,0,0,161,163,3,2,1,0,162,160,
	1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,19,1,0,0,0,
	166,164,1,0,0,0,167,168,5,36,0,0,168,169,5,21,0,0,169,176,3,2,1,0,170,171,
	5,17,0,0,171,172,5,36,0,0,172,173,5,21,0,0,173,175,3,2,1,0,174,170,1,0,
	0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,21,1,0,0,0,178,
	176,1,0,0,0,179,180,3,2,1,0,180,181,5,21,0,0,181,189,3,2,1,0,182,183,5,
	17,0,0,183,184,3,2,1,0,184,185,5,21,0,0,185,186,3,2,1,0,186,188,1,0,0,0,
	187,182,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,23,
	1,0,0,0,191,189,1,0,0,0,192,194,5,18,0,0,193,192,1,0,0,0,193,194,1,0,0,
	0,194,195,1,0,0,0,195,207,5,32,0,0,196,207,5,33,0,0,197,199,5,18,0,0,198,
	197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,207,5,31,0,0,201,207,5,
	34,0,0,202,207,5,35,0,0,203,207,5,26,0,0,204,207,5,27,0,0,205,207,5,28,
	0,0,206,193,1,0,0,0,206,196,1,0,0,0,206,198,1,0,0,0,206,201,1,0,0,0,206,
	202,1,0,0,0,206,203,1,0,0,0,206,204,1,0,0,0,206,205,1,0,0,0,207,25,1,0,
	0,0,29,35,42,50,61,73,75,82,88,91,101,104,114,117,120,122,126,131,134,142,
	145,150,153,157,164,176,189,193,198,206];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CELParser.__ATN) {
			CELParser.__ATN = new ATNDeserializer().deserialize(CELParser._serializedATN);
		}

		return CELParser.__ATN;
	}


	static DecisionsToDFA = CELParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	public _e!: ExprContext;
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(CELParser.EOF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_start;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterStart) {
	 		listener.enterStart(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitStart) {
	 		listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _e!: ConditionalOrContext;
	public _op!: Token;
	public _e1!: ConditionalOrContext;
	public _e2!: ExprContext;
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalOr_list(): ConditionalOrContext[] {
		return this.getTypedRuleContexts(ConditionalOrContext) as ConditionalOrContext[];
	}
	public conditionalOr(i: number): ConditionalOrContext {
		return this.getTypedRuleContext(ConditionalOrContext, i) as ConditionalOrContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(CELParser.COLON, 0);
	}
	public QUESTIONMARK(): TerminalNode {
		return this.getToken(CELParser.QUESTIONMARK, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_expr;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrContext extends ParserRuleContext {
	public _e!: ConditionalAndContext;
	public _s9!: Token;
	public _ops: Token[] = [];
	public _conditionalAnd!: ConditionalAndContext;
	public _e1: ConditionalAndContext[] = [];
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalAnd_list(): ConditionalAndContext[] {
		return this.getTypedRuleContexts(ConditionalAndContext) as ConditionalAndContext[];
	}
	public conditionalAnd(i: number): ConditionalAndContext {
		return this.getTypedRuleContext(ConditionalAndContext, i) as ConditionalAndContext;
	}
	public LOGICAL_OR_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.LOGICAL_OR);
	}
	public LOGICAL_OR(i: number): TerminalNode {
		return this.getToken(CELParser.LOGICAL_OR, i);
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_conditionalOr;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterConditionalOr) {
	 		listener.enterConditionalOr(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitConditionalOr) {
	 		listener.exitConditionalOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitConditionalOr) {
			return visitor.visitConditionalOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndContext extends ParserRuleContext {
	public _e!: RelationContext;
	public _s8!: Token;
	public _ops: Token[] = [];
	public _relation!: RelationContext;
	public _e1: RelationContext[] = [];
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public LOGICAL_AND_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.LOGICAL_AND);
	}
	public LOGICAL_AND(i: number): TerminalNode {
		return this.getToken(CELParser.LOGICAL_AND, i);
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_conditionalAnd;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterConditionalAnd) {
	 		listener.enterConditionalAnd(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitConditionalAnd) {
	 		listener.exitConditionalAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitConditionalAnd) {
			return visitor.visitConditionalAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_relation;
	}
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationOpContext extends RelationContext {
	public _op!: Token;
	constructor(parser: CELParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public LESS(): TerminalNode {
		return this.getToken(CELParser.LESS, 0);
	}
	public LESS_EQUALS(): TerminalNode {
		return this.getToken(CELParser.LESS_EQUALS, 0);
	}
	public GREATER_EQUALS(): TerminalNode {
		return this.getToken(CELParser.GREATER_EQUALS, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(CELParser.GREATER, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(CELParser.EQUALS, 0);
	}
	public NOT_EQUALS(): TerminalNode {
		return this.getToken(CELParser.NOT_EQUALS, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(CELParser.IN, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterRelationOp) {
	 		listener.enterRelationOp(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitRelationOp) {
	 		listener.exitRelationOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitRelationOp) {
			return visitor.visitRelationOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationCalcContext extends RelationContext {
	constructor(parser: CELParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public calc(): CalcContext {
		return this.getTypedRuleContext(CalcContext, 0) as CalcContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterRelationCalc) {
	 		listener.enterRelationCalc(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitRelationCalc) {
	 		listener.exitRelationCalc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitRelationCalc) {
			return visitor.visitRelationCalc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_calc;
	}
	public copyFrom(ctx: CalcContext): void {
		super.copyFrom(ctx);
	}
}
export class CalcMulDivContext extends CalcContext {
	public _op!: Token;
	constructor(parser: CELParser, ctx: CalcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public calc_list(): CalcContext[] {
		return this.getTypedRuleContexts(CalcContext) as CalcContext[];
	}
	public calc(i: number): CalcContext {
		return this.getTypedRuleContext(CalcContext, i) as CalcContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(CELParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(CELParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(CELParser.PERCENT, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCalcMulDiv) {
	 		listener.enterCalcMulDiv(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCalcMulDiv) {
	 		listener.exitCalcMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCalcMulDiv) {
			return visitor.visitCalcMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CalcUnaryContext extends CalcContext {
	constructor(parser: CELParser, ctx: CalcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unary(): UnaryContext {
		return this.getTypedRuleContext(UnaryContext, 0) as UnaryContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCalcUnary) {
	 		listener.enterCalcUnary(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCalcUnary) {
	 		listener.exitCalcUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCalcUnary) {
			return visitor.visitCalcUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CalcAddSubContext extends CalcContext {
	public _op!: Token;
	constructor(parser: CELParser, ctx: CalcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public calc_list(): CalcContext[] {
		return this.getTypedRuleContexts(CalcContext) as CalcContext[];
	}
	public calc(i: number): CalcContext {
		return this.getTypedRuleContext(CalcContext, i) as CalcContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(CELParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(CELParser.MINUS, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCalcAddSub) {
	 		listener.enterCalcAddSub(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCalcAddSub) {
	 		listener.exitCalcAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCalcAddSub) {
			return visitor.visitCalcAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_unary;
	}
	public copyFrom(ctx: UnaryContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends UnaryContext {
	public _s19!: Token;
	public _ops: Token[] = [];
	constructor(parser: CELParser, ctx: UnaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public EXCLAM_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.EXCLAM);
	}
	public EXCLAM(i: number): TerminalNode {
		return this.getToken(CELParser.EXCLAM, i);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberExprContext extends UnaryContext {
	constructor(parser: CELParser, ctx: UnaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterMemberExpr) {
	 		listener.enterMemberExpr(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitMemberExpr) {
	 		listener.exitMemberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitMemberExpr) {
			return visitor.visitMemberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegateContext extends UnaryContext {
	public _s18!: Token;
	public _ops: Token[] = [];
	constructor(parser: CELParser, ctx: UnaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(CELParser.MINUS, i);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterNegate) {
	 		listener.enterNegate(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitNegate) {
	 		listener.exitNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_member;
	}
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectOrCallContext extends MemberContext {
	public _op!: Token;
	public _id!: Token;
	public _open!: Token;
	public _args!: ExprListContext;
	constructor(parser: CELParser, ctx: MemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(CELParser.DOT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(CELParser.IDENTIFIER, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(CELParser.RPAREN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(CELParser.LPAREN, 0);
	}
	public exprList(): ExprListContext {
		return this.getTypedRuleContext(ExprListContext, 0) as ExprListContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterSelectOrCall) {
	 		listener.enterSelectOrCall(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitSelectOrCall) {
	 		listener.exitSelectOrCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitSelectOrCall) {
			return visitor.visitSelectOrCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExprContext extends MemberContext {
	constructor(parser: CELParser, ctx: MemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterPrimaryExpr) {
	 		listener.enterPrimaryExpr(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitPrimaryExpr) {
	 		listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexContext extends MemberContext {
	public _op!: Token;
	public _index!: ExprContext;
	constructor(parser: CELParser, ctx: MemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public RPRACKET(): TerminalNode {
		return this.getToken(CELParser.RPRACKET, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(CELParser.LBRACKET, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterIndex) {
	 		listener.enterIndex(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitIndex) {
	 		listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateMessageContext extends MemberContext {
	public _op!: Token;
	public _entries!: FieldInitializerListContext;
	constructor(parser: CELParser, ctx: MemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(CELParser.RBRACE, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(CELParser.LBRACE, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(CELParser.COMMA, 0);
	}
	public fieldInitializerList(): FieldInitializerListContext {
		return this.getTypedRuleContext(FieldInitializerListContext, 0) as FieldInitializerListContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCreateMessage) {
	 		listener.enterCreateMessage(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCreateMessage) {
	 		listener.exitCreateMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCreateMessage) {
			return visitor.visitCreateMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_primary;
	}
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class CreateListContext extends PrimaryContext {
	public _op!: Token;
	public _elems!: ExprListContext;
	constructor(parser: CELParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RPRACKET(): TerminalNode {
		return this.getToken(CELParser.RPRACKET, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(CELParser.LBRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(CELParser.COMMA, 0);
	}
	public exprList(): ExprListContext {
		return this.getTypedRuleContext(ExprListContext, 0) as ExprListContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCreateList) {
	 		listener.enterCreateList(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCreateList) {
	 		listener.exitCreateList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCreateList) {
			return visitor.visitCreateList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateStructContext extends PrimaryContext {
	public _op!: Token;
	public _entries!: MapInitializerListContext;
	constructor(parser: CELParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(CELParser.RBRACE, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(CELParser.LBRACE, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(CELParser.COMMA, 0);
	}
	public mapInitializerList(): MapInitializerListContext {
		return this.getTypedRuleContext(MapInitializerListContext, 0) as MapInitializerListContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterCreateStruct) {
	 		listener.enterCreateStruct(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitCreateStruct) {
	 		listener.exitCreateStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitCreateStruct) {
			return visitor.visitCreateStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantLiteralContext extends PrimaryContext {
	constructor(parser: CELParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterConstantLiteral) {
	 		listener.enterConstantLiteral(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitConstantLiteral) {
	 		listener.exitConstantLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitConstantLiteral) {
			return visitor.visitConstantLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NestedContext extends PrimaryContext {
	public _e!: ExprContext;
	constructor(parser: CELParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(CELParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(CELParser.RPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterNested) {
	 		listener.enterNested(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitNested) {
	 		listener.exitNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitNested) {
			return visitor.visitNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentOrGlobalCallContext extends PrimaryContext {
	public _leadingDot!: Token;
	public _id!: Token;
	public _op!: Token;
	public _args!: ExprListContext;
	constructor(parser: CELParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(CELParser.IDENTIFIER, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(CELParser.RPAREN, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(CELParser.DOT, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(CELParser.LPAREN, 0);
	}
	public exprList(): ExprListContext {
		return this.getTypedRuleContext(ExprListContext, 0) as ExprListContext;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterIdentOrGlobalCall) {
	 		listener.enterIdentOrGlobalCall(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitIdentOrGlobalCall) {
	 		listener.exitIdentOrGlobalCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitIdentOrGlobalCall) {
			return visitor.visitIdentOrGlobalCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public _expr!: ExprContext;
	public _e: ExprContext[] = [];
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(CELParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_exprList;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterExprList) {
	 		listener.enterExprList(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitExprList) {
	 		listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldInitializerListContext extends ParserRuleContext {
	public _IDENTIFIER!: Token;
	public _fields: Token[] = [];
	public _s21!: Token;
	public _cols: Token[] = [];
	public _expr!: ExprContext;
	public _values: ExprContext[] = [];
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(CELParser.IDENTIFIER, i);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(CELParser.COLON, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(CELParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_fieldInitializerList;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterFieldInitializerList) {
	 		listener.enterFieldInitializerList(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitFieldInitializerList) {
	 		listener.exitFieldInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitFieldInitializerList) {
			return visitor.visitFieldInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapInitializerListContext extends ParserRuleContext {
	public _expr!: ExprContext;
	public _keys: ExprContext[] = [];
	public _s21!: Token;
	public _cols: Token[] = [];
	public _values: ExprContext[] = [];
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(CELParser.COLON, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(CELParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(CELParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_mapInitializerList;
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterMapInitializerList) {
	 		listener.enterMapInitializerList(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitMapInitializerList) {
	 		listener.exitMapInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitMapInitializerList) {
			return visitor.visitMapInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: CELParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CELParser.RULE_literal;
	}
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class BytesContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BYTES(): TerminalNode {
		return this.getToken(CELParser.BYTES, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterBytes) {
	 		listener.enterBytes(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitBytes) {
	 		listener.exitBytes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitBytes) {
			return visitor.visitBytes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UintContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUM_UINT(): TerminalNode {
		return this.getToken(CELParser.NUM_UINT, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterUint) {
	 		listener.enterUint(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitUint) {
	 		listener.exitUint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitUint) {
			return visitor.visitUint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(CELParser.NULL, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterNull) {
	 		listener.enterNull(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitNull) {
	 		listener.exitNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitNull) {
			return visitor.visitNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolFalseContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CELParser.FALSE, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterBoolFalse) {
	 		listener.enterBoolFalse(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitBoolFalse) {
	 		listener.exitBoolFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitBoolFalse) {
			return visitor.visitBoolFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(CELParser.STRING, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleContext extends LiteralContext {
	public _sign!: Token;
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUM_FLOAT(): TerminalNode {
		return this.getToken(CELParser.NUM_FLOAT, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(CELParser.MINUS, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterDouble) {
	 		listener.enterDouble(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitDouble) {
	 		listener.exitDouble(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitDouble) {
			return visitor.visitDouble(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolTrueContext extends LiteralContext {
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(CELParser.TRUE, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterBoolTrue) {
	 		listener.enterBoolTrue(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitBoolTrue) {
	 		listener.exitBoolTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitBoolTrue) {
			return visitor.visitBoolTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends LiteralContext {
	public _sign!: Token;
	public _tok!: Token;
	constructor(parser: CELParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUM_INT(): TerminalNode {
		return this.getToken(CELParser.NUM_INT, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(CELParser.MINUS, 0);
	}
	public enterRule(listener: CELListener): void {
	    if(listener.enterInt) {
	 		listener.enterInt(this);
		}
	}
	public exitRule(listener: CELListener): void {
	    if(listener.exitInt) {
	 		listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CELVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
