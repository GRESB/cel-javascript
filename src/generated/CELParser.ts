// Generated from src/grammar/CEL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CELListener } from "./CELListener";
import { CELVisitor } from "./CELVisitor";


export class CELParser extends Parser {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expr", "conditionalOr", "conditionalAnd", "relation", "calc", 
		"unary", "member", "primary", "exprList", "fieldInitializerList", "mapInitializerList", 
		"literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'=='", "'!='", "'in'", "'<'", "'<='", "'>='", "'>'", "'&&'", 
		"'||'", "'['", "']'", "'{'", "'}'", "'('", "')'", "'.'", "','", "'-'", 
		"'!'", "'?'", "':'", "'+'", "'*'", "'/'", "'%'", "'true'", "'false'", 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EQUALS", "NOT_EQUALS", "IN", "LESS", "LESS_EQUALS", "GREATER_EQUALS", 
		"GREATER", "LOGICAL_AND", "LOGICAL_OR", "LBRACKET", "RPRACKET", "LBRACE", 
		"RBRACE", "LPAREN", "RPAREN", "DOT", "COMMA", "MINUS", "EXCLAM", "QUESTIONMARK", 
		"COLON", "PLUS", "STAR", "SLASH", "PERCENT", "TRUE", "FALSE", "NULL", 
		"WHITESPACE", "COMMENT", "NUM_FLOAT", "NUM_INT", "NUM_UINT", "STRING", 
		"BYTES", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CELParser._LITERAL_NAMES, CELParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CELParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CEL.g4"; }

	// @Override
	public get ruleNames(): string[] { return CELParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CELParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CELParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CELParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			_localctx._e = this.expr();
			this.state = 27;
			this.match(CELParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CELParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			_localctx._e = this.conditionalOr();
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CELParser.QUESTIONMARK) {
				{
				this.state = 30;
				_localctx._op = this.match(CELParser.QUESTIONMARK);
				this.state = 31;
				_localctx._e1 = this.conditionalOr();
				this.state = 32;
				this.match(CELParser.COLON);
				this.state = 33;
				_localctx._e2 = this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalOr(): ConditionalOrContext {
		let _localctx: ConditionalOrContext = new ConditionalOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CELParser.RULE_conditionalOr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			_localctx._e = this.conditionalAnd();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CELParser.LOGICAL_OR) {
				{
				{
				this.state = 38;
				_localctx._s9 = this.match(CELParser.LOGICAL_OR);
				_localctx._ops.push(_localctx._s9);
				this.state = 39;
				_localctx._conditionalAnd = this.conditionalAnd();
				_localctx._e1.push(_localctx._conditionalAnd);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalAnd(): ConditionalAndContext {
		let _localctx: ConditionalAndContext = new ConditionalAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CELParser.RULE_conditionalAnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			_localctx._e = this.relation(0);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CELParser.LOGICAL_AND) {
				{
				{
				this.state = 46;
				_localctx._s8 = this.match(CELParser.LOGICAL_AND);
				_localctx._ops.push(_localctx._s8);
				this.state = 47;
				_localctx._relation = this.relation(0);
				_localctx._e1.push(_localctx._relation);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: RelationContext = new RelationContext(this._ctx, _parentState);
		let _prevctx: RelationContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, CELParser.RULE_relation, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationCalcContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 54;
			this.calc(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new RelationOpContext(new RelationContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_relation);
					this.state = 56;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 57;
					(_localctx as RelationOpContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CELParser.EQUALS) | (1 << CELParser.NOT_EQUALS) | (1 << CELParser.IN) | (1 << CELParser.LESS) | (1 << CELParser.LESS_EQUALS) | (1 << CELParser.GREATER_EQUALS) | (1 << CELParser.GREATER))) !== 0))) {
						(_localctx as RelationOpContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
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
		let _localctx: CalcContext = new CalcContext(this._ctx, _parentState);
		let _prevctx: CalcContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CELParser.RULE_calc, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new CalcUnaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 65;
			this.unary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 73;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new CalcMulDivContext(new CalcContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_calc);
						this.state = 67;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 68;
						(_localctx as CalcMulDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CELParser.STAR) | (1 << CELParser.SLASH) | (1 << CELParser.PERCENT))) !== 0))) {
							(_localctx as CalcMulDivContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 69;
						this.calc(3);
						}
						break;

					case 2:
						{
						_localctx = new CalcAddSubContext(new CalcContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_calc);
						this.state = 70;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 71;
						(_localctx as CalcAddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CELParser.MINUS || _la === CELParser.PLUS)) {
							(_localctx as CalcAddSubContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

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
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary(): UnaryContext {
		let _localctx: UnaryContext = new UnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CELParser.RULE_unary);
		let _la: number;
		try {
			let _alt: number;
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new MemberExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 78;
				this.member(0);
				}
				break;

			case 2:
				_localctx = new LogicalNotContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 79;
					(_localctx as LogicalNotContext)._s19 = this.match(CELParser.EXCLAM);
					(_localctx as LogicalNotContext)._ops.push((_localctx as LogicalNotContext)._s19);
					}
					}
					this.state = 82;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CELParser.EXCLAM);
				this.state = 84;
				this.member(0);
				}
				break;

			case 3:
				_localctx = new NegateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
						(_localctx as NegateContext)._s18 = this.match(CELParser.MINUS);
						(_localctx as NegateContext)._ops.push((_localctx as NegateContext)._s18);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 88;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 90;
				this.member(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: MemberContext = new MemberContext(this._ctx, _parentState);
		let _prevctx: MemberContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, CELParser.RULE_member, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryExprContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 94;
			this.primary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 120;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new SelectOrCallContext(new MemberContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_member);
						this.state = 96;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 97;
						(_localctx as SelectOrCallContext)._op = this.match(CELParser.DOT);
						this.state = 98;
						(_localctx as SelectOrCallContext)._id = this.match(CELParser.IDENTIFIER);
						this.state = 104;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
						case 1:
							{
							this.state = 99;
							(_localctx as SelectOrCallContext)._open = this.match(CELParser.LPAREN);
							this.state = 101;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
								{
								this.state = 100;
								(_localctx as SelectOrCallContext)._args = this.exprList();
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
						_localctx = new IndexContext(new MemberContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_member);
						this.state = 106;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 107;
						(_localctx as IndexContext)._op = this.match(CELParser.LBRACKET);
						this.state = 108;
						(_localctx as IndexContext)._index = this.expr();
						this.state = 109;
						this.match(CELParser.RPRACKET);
						}
						break;

					case 3:
						{
						_localctx = new CreateMessageContext(new MemberContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CELParser.RULE_member);
						this.state = 111;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 112;
						(_localctx as CreateMessageContext)._op = this.match(CELParser.LBRACE);
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CELParser.IDENTIFIER) {
							{
							this.state = 113;
							(_localctx as CreateMessageContext)._entries = this.fieldInitializerList();
							}
						}

						this.state = 117;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CELParser.COMMA) {
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
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CELParser.RULE_primary);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CELParser.DOT:
			case CELParser.IDENTIFIER:
				_localctx = new IdentOrGlobalCallContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CELParser.DOT) {
					{
					this.state = 125;
					(_localctx as IdentOrGlobalCallContext)._leadingDot = this.match(CELParser.DOT);
					}
				}

				this.state = 128;
				(_localctx as IdentOrGlobalCallContext)._id = this.match(CELParser.IDENTIFIER);
				this.state = 134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					(_localctx as IdentOrGlobalCallContext)._op = this.match(CELParser.LPAREN);
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
						{
						this.state = 130;
						(_localctx as IdentOrGlobalCallContext)._args = this.exprList();
						}
					}

					this.state = 133;
					this.match(CELParser.RPAREN);
					}
					break;
				}
				}
				break;
			case CELParser.LPAREN:
				_localctx = new NestedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.match(CELParser.LPAREN);
				this.state = 137;
				(_localctx as NestedContext)._e = this.expr();
				this.state = 138;
				this.match(CELParser.RPAREN);
				}
				break;
			case CELParser.LBRACKET:
				_localctx = new CreateListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
				(_localctx as CreateListContext)._op = this.match(CELParser.LBRACKET);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
					{
					this.state = 141;
					(_localctx as CreateListContext)._elems = this.exprList();
					}
				}

				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CELParser.COMMA) {
					{
					this.state = 144;
					this.match(CELParser.COMMA);
					}
				}

				this.state = 147;
				this.match(CELParser.RPRACKET);
				}
				break;
			case CELParser.LBRACE:
				_localctx = new CreateStructContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 148;
				(_localctx as CreateStructContext)._op = this.match(CELParser.LBRACE);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
					{
					this.state = 149;
					(_localctx as CreateStructContext)._entries = this.mapInitializerList();
					}
				}

				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CELParser.COMMA) {
					{
					this.state = 152;
					this.match(CELParser.COMMA);
					}
				}

				this.state = 155;
				this.match(CELParser.RBRACE);
				}
				break;
			case CELParser.MINUS:
			case CELParser.TRUE:
			case CELParser.FALSE:
			case CELParser.NULL:
			case CELParser.NUM_FLOAT:
			case CELParser.NUM_INT:
			case CELParser.NUM_UINT:
			case CELParser.STRING:
			case CELParser.BYTES:
				_localctx = new ConstantLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CELParser.RULE_exprList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			_localctx._expr = this.expr();
			_localctx._e.push(_localctx._expr);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 160;
					this.match(CELParser.COMMA);
					this.state = 161;
					_localctx._expr = this.expr();
					_localctx._e.push(_localctx._expr);
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldInitializerList(): FieldInitializerListContext {
		let _localctx: FieldInitializerListContext = new FieldInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CELParser.RULE_fieldInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			_localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
			_localctx._fields.push(_localctx._IDENTIFIER);
			this.state = 168;
			_localctx._s21 = this.match(CELParser.COLON);
			_localctx._cols.push(_localctx._s21);
			this.state = 169;
			_localctx._expr = this.expr();
			_localctx._values.push(_localctx._expr);
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(CELParser.COMMA);
					this.state = 171;
					_localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
					_localctx._fields.push(_localctx._IDENTIFIER);
					this.state = 172;
					_localctx._s21 = this.match(CELParser.COLON);
					_localctx._cols.push(_localctx._s21);
					this.state = 173;
					_localctx._expr = this.expr();
					_localctx._values.push(_localctx._expr);
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapInitializerList(): MapInitializerListContext {
		let _localctx: MapInitializerListContext = new MapInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CELParser.RULE_mapInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			_localctx._expr = this.expr();
			_localctx._keys.push(_localctx._expr);
			this.state = 180;
			_localctx._s21 = this.match(CELParser.COLON);
			_localctx._cols.push(_localctx._s21);
			this.state = 181;
			_localctx._expr = this.expr();
			_localctx._values.push(_localctx._expr);
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 182;
					this.match(CELParser.COMMA);
					this.state = 183;
					_localctx._expr = this.expr();
					_localctx._keys.push(_localctx._expr);
					this.state = 184;
					_localctx._s21 = this.match(CELParser.COLON);
					_localctx._cols.push(_localctx._s21);
					this.state = 185;
					_localctx._expr = this.expr();
					_localctx._values.push(_localctx._expr);
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CELParser.RULE_literal);
		let _la: number;
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CELParser.MINUS) {
					{
					this.state = 192;
					(_localctx as IntContext)._sign = this.match(CELParser.MINUS);
					}
				}

				this.state = 195;
				(_localctx as IntContext)._tok = this.match(CELParser.NUM_INT);
				}
				break;

			case 2:
				_localctx = new UintContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				(_localctx as UintContext)._tok = this.match(CELParser.NUM_UINT);
				}
				break;

			case 3:
				_localctx = new DoubleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CELParser.MINUS) {
					{
					this.state = 197;
					(_localctx as DoubleContext)._sign = this.match(CELParser.MINUS);
					}
				}

				this.state = 200;
				(_localctx as DoubleContext)._tok = this.match(CELParser.NUM_FLOAT);
				}
				break;

			case 4:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 201;
				(_localctx as StringContext)._tok = this.match(CELParser.STRING);
				}
				break;

			case 5:
				_localctx = new BytesContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 202;
				(_localctx as BytesContext)._tok = this.match(CELParser.BYTES);
				}
				break;

			case 6:
				_localctx = new BoolTrueContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 203;
				(_localctx as BoolTrueContext)._tok = this.match(CELParser.TRUE);
				}
				break;

			case 7:
				_localctx = new BoolFalseContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 204;
				(_localctx as BoolFalseContext)._tok = this.match(CELParser.FALSE);
				}
				break;

			case 8:
				_localctx = new NullContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 205;
				(_localctx as NullContext)._tok = this.match(CELParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 5:
			return this.calc_sempred(_localctx as CalcContext, predIndex);

		case 7:
			return this.member_sempred(_localctx as MemberContext, predIndex);
		}
		return true;
	}
	private relation_sempred(_localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private calc_sempred(_localctx: CalcContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private member_sempred(_localctx: MemberContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xD3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03&\n\x03\x03\x04\x03\x04\x03\x04\x07\x04+\n\x04\f\x04" +
		"\x0E\x04.\v\x04\x03\x05\x03\x05\x03\x05\x07\x053\n\x05\f\x05\x0E\x056" +
		"\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06>\n\x06" +
		"\f\x06\x0E\x06A\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07L\n\x07\f\x07\x0E\x07O\v\x07\x03\b\x03" +
		"\b\x06\bS\n\b\r\b\x0E\bT\x03\b\x03\b\x06\bY\n\b\r\b\x0E\bZ\x03\b\x05\b" +
		"^\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\th\n\t\x03\t" +
		"\x05\tk\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tu\n\t" +
		"\x03\t\x05\tx\n\t\x03\t\x07\t{\n\t\f\t\x0E\t~\v\t\x03\n\x05\n\x81\n\n" +
		"\x03\n\x03\n\x03\n\x05\n\x86\n\n\x03\n\x05\n\x89\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\x91\n\n\x03\n\x05\n\x94\n\n\x03\n\x03\n\x03\n" +
		"\x05\n\x99\n\n\x03\n\x05\n\x9C\n\n\x03\n\x03\n\x05\n\xA0\n\n\x03\v\x03" +
		"\v\x03\v\x07\v\xA5\n\v\f\v\x0E\v\xA8\v\v\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\xBE\n\r\f\r\x0E\r\xC1\v\r\x03\x0E\x05\x0E\xC4" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC9\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD1\n\x0E\x03\x0E\x02\x02\x05\n\f\x10" +
		"\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03\x02\x03\t\x03\x02\x19\x1B" +
		"\x04\x02\x14\x14\x18\x18\x02\xED\x02\x1C\x03\x02\x02\x02\x04\x1F\x03\x02" +
		"\x02\x02\x06\'\x03\x02\x02\x02\b/\x03\x02\x02\x02\n7\x03\x02\x02\x02\f" +
		"B\x03\x02\x02\x02\x0E]\x03\x02\x02\x02\x10_\x03\x02\x02\x02\x12\x9F\x03" +
		"\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xA9\x03\x02\x02\x02\x18\xB5\x03" +
		"\x02\x02\x02\x1A\xD0\x03\x02\x02\x02\x1C\x1D\x05\x04\x03\x02\x1D\x1E\x07" +
		"\x02\x02\x03\x1E\x03\x03\x02\x02\x02\x1F%\x05\x06\x04\x02 !\x07\x16\x02" +
		"\x02!\"\x05\x06\x04\x02\"#\x07\x17\x02\x02#$\x05\x04\x03\x02$&\x03\x02" +
		"\x02\x02% \x03\x02\x02\x02%&\x03\x02\x02\x02&\x05\x03\x02\x02\x02\',\x05" +
		"\b\x05\x02()\x07\v\x02\x02)+\x05\b\x05\x02*(\x03\x02\x02\x02+.\x03\x02" +
		"\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x07\x03\x02\x02\x02.,\x03" +
		"\x02\x02\x02/4\x05\n\x06\x0201\x07\n\x02\x0213\x05\n\x06\x0220\x03\x02" +
		"\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\t\x03" +
		"\x02\x02\x0264\x03\x02\x02\x0278\b\x06\x01\x0289\x05\f\x07\x029?\x03\x02" +
		"\x02\x02:;\f\x03\x02\x02;<\t\x02\x02\x02<>\x05\n\x06\x04=:\x03\x02\x02" +
		"\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\v\x03\x02" +
		"\x02\x02A?\x03\x02\x02\x02BC\b\x07\x01\x02CD\x05\x0E\b\x02DM\x03\x02\x02" +
		"\x02EF\f\x04\x02\x02FG\t\x03\x02\x02GL\x05\f\x07\x05HI\f\x03\x02\x02I" +
		"J\t\x04\x02\x02JL\x05\f\x07\x04KE\x03\x02\x02\x02KH\x03\x02\x02\x02LO" +
		"\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\r\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02P^\x05\x10\t\x02QS\x07\x15\x02\x02RQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"V^\x05\x10\t\x02WY\x07\x14\x02\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\^\x05\x10\t\x02" +
		"]P\x03\x02\x02\x02]R\x03\x02\x02\x02]X\x03\x02\x02\x02^\x0F\x03\x02\x02" +
		"\x02_`\b\t\x01\x02`a\x05\x12\n\x02a|\x03\x02\x02\x02bc\f\x05\x02\x02c" +
		"d\x07\x12\x02\x02dj\x07&\x02\x02eg\x07\x10\x02\x02fh\x05\x14\v\x02gf\x03" +
		"\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x07\x11\x02\x02je\x03" +
		"\x02\x02\x02jk\x03\x02\x02\x02k{\x03\x02\x02\x02lm\f\x04\x02\x02mn\x07" +
		"\f\x02\x02no\x05\x04\x03\x02op\x07\r\x02\x02p{\x03\x02\x02\x02qr\f\x03" +
		"\x02\x02rt\x07\x0E\x02\x02su\x05\x16\f\x02ts\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02uw\x03\x02\x02\x02vx\x07\x13\x02\x02wv\x03\x02\x02\x02wx\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02y{\x07\x0F\x02\x02zb\x03\x02\x02\x02zl\x03\x02" +
		"\x02\x02zq\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}\x11\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x81\x07\x12\x02\x02" +
		"\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02" +
		"\x82\x88\x07&\x02\x02\x83\x85\x07\x10\x02\x02\x84\x86\x05\x14\v\x02\x85" +
		"\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87" +
		"\x89\x07\x11\x02\x02\x88\x83\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
		"\xA0\x03\x02\x02\x02\x8A\x8B\x07\x10\x02\x02\x8B\x8C\x05\x04\x03\x02\x8C" +
		"\x8D\x07\x11\x02\x02\x8D\xA0\x03\x02\x02\x02\x8E\x90\x07\f\x02\x02\x8F" +
		"\x91\x05\x14\v\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x93\x03\x02\x02\x02\x92\x94\x07\x13\x02\x02\x93\x92\x03\x02\x02\x02\x93" +
		"\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\xA0\x07\r\x02\x02\x96" +
		"\x98\x07\x0E\x02\x02\x97\x99\x05\x18\r\x02\x98\x97\x03\x02\x02\x02\x98" +
		"\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x9C\x07\x13\x02\x02\x9B" +
		"\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
		"\xA0\x07\x0F\x02\x02\x9E\xA0\x05\x1A\x0E\x02\x9F\x80\x03\x02\x02\x02\x9F" +
		"\x8A\x03\x02\x02\x02\x9F\x8E\x03\x02\x02\x02\x9F\x96\x03\x02\x02\x02\x9F" +
		"\x9E\x03\x02\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA6\x05\x04\x03\x02\xA2" +
		"\xA3\x07\x13\x02\x02\xA3\xA5\x05\x04\x03\x02\xA4\xA2\x03\x02\x02\x02\xA5" +
		"\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7" +
		"\x15\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07&\x02\x02\xAA" +
		"\xAB\x07\x17\x02\x02\xAB\xB2\x05\x04\x03\x02\xAC\xAD\x07\x13\x02\x02\xAD" +
		"\xAE\x07&\x02\x02\xAE\xAF\x07\x17\x02\x02\xAF\xB1\x05\x04\x03\x02\xB0" +
		"\xAC\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2" +
		"\xB3\x03\x02\x02\x02\xB3\x17\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5" +
		"\xB6\x05\x04\x03\x02\xB6\xB7\x07\x17\x02\x02\xB7\xBF\x05\x04\x03\x02\xB8" +
		"\xB9\x07\x13\x02\x02\xB9\xBA\x05\x04\x03\x02\xBA\xBB\x07\x17\x02\x02\xBB" +
		"\xBC\x05\x04\x03\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBE" +
		"\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0" +
		"\x19\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC4\x07\x14\x02\x02\xC3" +
		"\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"\xD1\x07\"\x02\x02\xC6\xD1\x07#\x02\x02\xC7\xC9\x07\x14\x02\x02\xC8\xC7" +
		"\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xD1" +
		"\x07!\x02\x02\xCB\xD1\x07$\x02\x02\xCC\xD1\x07%\x02\x02\xCD\xD1\x07\x1C" +
		"\x02\x02\xCE\xD1\x07\x1D\x02\x02\xCF\xD1\x07\x1E\x02\x02\xD0\xC3\x03\x02" +
		"\x02\x02\xD0\xC6\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0\xCB\x03\x02" +
		"\x02\x02\xD0\xCC\x03\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03\x02" +
		"\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\x1B\x03\x02\x02\x02\x1F%,4?KMTZ]" +
		"gjtwz|\x80\x85\x88\x90\x93\x98\x9B\x9F\xA6\xB2\xBF\xC3\xC8\xD0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CELParser.__ATN) {
			CELParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CELParser._serializedATN));
		}

		return CELParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public _e!: ExprContext;
	public EOF(): TerminalNode { return this.getToken(CELParser.EOF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_start; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitStart) {
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
	public conditionalOr(): ConditionalOrContext[];
	public conditionalOr(i: number): ConditionalOrContext;
	public conditionalOr(i?: number): ConditionalOrContext | ConditionalOrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalOrContext);
		} else {
			return this.getRuleContext(i, ConditionalOrContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CELParser.COLON, 0); }
	public QUESTIONMARK(): TerminalNode | undefined { return this.tryGetToken(CELParser.QUESTIONMARK, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_expr; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitExpr) {
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
	public conditionalAnd(): ConditionalAndContext[];
	public conditionalAnd(i: number): ConditionalAndContext;
	public conditionalAnd(i?: number): ConditionalAndContext | ConditionalAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalAndContext);
		} else {
			return this.getRuleContext(i, ConditionalAndContext);
		}
	}
	public LOGICAL_OR(): TerminalNode[];
	public LOGICAL_OR(i: number): TerminalNode;
	public LOGICAL_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.LOGICAL_OR);
		} else {
			return this.getToken(CELParser.LOGICAL_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_conditionalOr; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterConditionalOr) {
			listener.enterConditionalOr(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitConditionalOr) {
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
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public LOGICAL_AND(): TerminalNode[];
	public LOGICAL_AND(i: number): TerminalNode;
	public LOGICAL_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.LOGICAL_AND);
		} else {
			return this.getToken(CELParser.LOGICAL_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_conditionalAnd; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterConditionalAnd) {
			listener.enterConditionalAnd(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitConditionalAnd) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_relation; }
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationCalcContext extends RelationContext {
	public calc(): CalcContext {
		return this.getRuleContext(0, CalcContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterRelationCalc) {
			listener.enterRelationCalc(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitRelationCalc) {
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
export class RelationOpContext extends RelationContext {
	public _op!: Token;
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(CELParser.LESS, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CELParser.LESS_EQUALS, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CELParser.GREATER_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(CELParser.GREATER, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(CELParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CELParser.NOT_EQUALS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CELParser.IN, 0); }
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterRelationOp) {
			listener.enterRelationOp(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitRelationOp) {
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


export class CalcContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_calc; }
	public copyFrom(ctx: CalcContext): void {
		super.copyFrom(ctx);
	}
}
export class CalcUnaryContext extends CalcContext {
	public unary(): UnaryContext {
		return this.getRuleContext(0, UnaryContext);
	}
	constructor(ctx: CalcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCalcUnary) {
			listener.enterCalcUnary(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCalcUnary) {
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
export class CalcMulDivContext extends CalcContext {
	public _op!: Token;
	public calc(): CalcContext[];
	public calc(i: number): CalcContext;
	public calc(i?: number): CalcContext | CalcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcContext);
		} else {
			return this.getRuleContext(i, CalcContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CELParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(CELParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(CELParser.PERCENT, 0); }
	constructor(ctx: CalcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCalcMulDiv) {
			listener.enterCalcMulDiv(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCalcMulDiv) {
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
export class CalcAddSubContext extends CalcContext {
	public _op!: Token;
	public calc(): CalcContext[];
	public calc(i: number): CalcContext;
	public calc(i?: number): CalcContext | CalcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcContext);
		} else {
			return this.getRuleContext(i, CalcContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CELParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CELParser.MINUS, 0); }
	constructor(ctx: CalcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCalcAddSub) {
			listener.enterCalcAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCalcAddSub) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_unary; }
	public copyFrom(ctx: UnaryContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberExprContext extends UnaryContext {
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterMemberExpr) {
			listener.enterMemberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitMemberExpr) {
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
export class LogicalNotContext extends UnaryContext {
	public _s19!: Token;
	public _ops: Token[] = [];
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public EXCLAM(): TerminalNode[];
	public EXCLAM(i: number): TerminalNode;
	public EXCLAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.EXCLAM);
		} else {
			return this.getToken(CELParser.EXCLAM, i);
		}
	}
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitLogicalNot) {
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
export class NegateContext extends UnaryContext {
	public _s18!: Token;
	public _ops: Token[] = [];
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.MINUS);
		} else {
			return this.getToken(CELParser.MINUS, i);
		}
	}
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterNegate) {
			listener.enterNegate(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitNegate) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_member; }
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExprContext extends MemberContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitPrimaryExpr) {
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
export class SelectOrCallContext extends MemberContext {
	public _op!: Token;
	public _id!: Token;
	public _open!: Token;
	public _args!: ExprListContext;
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public DOT(): TerminalNode { return this.getToken(CELParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CELParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CELParser.RPAREN, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CELParser.LPAREN, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterSelectOrCall) {
			listener.enterSelectOrCall(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitSelectOrCall) {
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
export class IndexContext extends MemberContext {
	public _op!: Token;
	public _index!: ExprContext;
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public RPRACKET(): TerminalNode { return this.getToken(CELParser.RPRACKET, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(CELParser.LBRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitIndex) {
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
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(CELParser.RBRACE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CELParser.LBRACE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CELParser.COMMA, 0); }
	public fieldInitializerList(): FieldInitializerListContext | undefined {
		return this.tryGetRuleContext(0, FieldInitializerListContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCreateMessage) {
			listener.enterCreateMessage(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCreateMessage) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentOrGlobalCallContext extends PrimaryContext {
	public _leadingDot!: Token;
	public _id!: Token;
	public _op!: Token;
	public _args!: ExprListContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(CELParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CELParser.RPAREN, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CELParser.DOT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CELParser.LPAREN, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterIdentOrGlobalCall) {
			listener.enterIdentOrGlobalCall(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitIdentOrGlobalCall) {
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
export class NestedContext extends PrimaryContext {
	public _e!: ExprContext;
	public LPAREN(): TerminalNode { return this.getToken(CELParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CELParser.RPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterNested) {
			listener.enterNested(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitNested) {
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
export class CreateListContext extends PrimaryContext {
	public _op!: Token;
	public _elems!: ExprListContext;
	public RPRACKET(): TerminalNode { return this.getToken(CELParser.RPRACKET, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(CELParser.LBRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CELParser.COMMA, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCreateList) {
			listener.enterCreateList(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCreateList) {
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
	public RBRACE(): TerminalNode { return this.getToken(CELParser.RBRACE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CELParser.LBRACE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CELParser.COMMA, 0); }
	public mapInitializerList(): MapInitializerListContext | undefined {
		return this.tryGetRuleContext(0, MapInitializerListContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterCreateStruct) {
			listener.enterCreateStruct(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitCreateStruct) {
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
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterConstantLiteral) {
			listener.enterConstantLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitConstantLiteral) {
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


export class ExprListContext extends ParserRuleContext {
	public _expr!: ExprContext;
	public _e: ExprContext[] = [];
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.COMMA);
		} else {
			return this.getToken(CELParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_exprList; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitExprList) {
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
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.IDENTIFIER);
		} else {
			return this.getToken(CELParser.IDENTIFIER, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.COLON);
		} else {
			return this.getToken(CELParser.COLON, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.COMMA);
		} else {
			return this.getToken(CELParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_fieldInitializerList; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterFieldInitializerList) {
			listener.enterFieldInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitFieldInitializerList) {
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
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.COLON);
		} else {
			return this.getToken(CELParser.COLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CELParser.COMMA);
		} else {
			return this.getToken(CELParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_mapInitializerList; }
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterMapInitializerList) {
			listener.enterMapInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitMapInitializerList) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CELParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntContext extends LiteralContext {
	public _sign!: Token;
	public _tok!: Token;
	public NUM_INT(): TerminalNode { return this.getToken(CELParser.NUM_INT, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CELParser.MINUS, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitInt) {
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
export class UintContext extends LiteralContext {
	public _tok!: Token;
	public NUM_UINT(): TerminalNode { return this.getToken(CELParser.NUM_UINT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterUint) {
			listener.enterUint(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitUint) {
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
export class DoubleContext extends LiteralContext {
	public _sign!: Token;
	public _tok!: Token;
	public NUM_FLOAT(): TerminalNode { return this.getToken(CELParser.NUM_FLOAT, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CELParser.MINUS, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterDouble) {
			listener.enterDouble(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitDouble) {
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
export class StringContext extends LiteralContext {
	public _tok!: Token;
	public STRING(): TerminalNode { return this.getToken(CELParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitString) {
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
export class BytesContext extends LiteralContext {
	public _tok!: Token;
	public BYTES(): TerminalNode { return this.getToken(CELParser.BYTES, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterBytes) {
			listener.enterBytes(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitBytes) {
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
export class BoolTrueContext extends LiteralContext {
	public _tok!: Token;
	public TRUE(): TerminalNode { return this.getToken(CELParser.TRUE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterBoolTrue) {
			listener.enterBoolTrue(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitBoolTrue) {
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
export class BoolFalseContext extends LiteralContext {
	public _tok!: Token;
	public FALSE(): TerminalNode { return this.getToken(CELParser.FALSE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterBoolFalse) {
			listener.enterBoolFalse(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitBoolFalse) {
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
export class NullContext extends LiteralContext {
	public _tok!: Token;
	public NULL(): TerminalNode { return this.getToken(CELParser.NULL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CELListener): void {
		if (listener.enterNull) {
			listener.enterNull(this);
		}
	}
	// @Override
	public exitRule(listener: CELListener): void {
		if (listener.exitNull) {
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


